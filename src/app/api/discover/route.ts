import Anthropic from '@anthropic-ai/sdk';
import { SYSTEM_PROMPT } from '@/lib/prompt';
import { NextResponse } from 'next/server';

const anthropic = new Anthropic();

export async function POST(req: Request) {
  try {
    const { description } = await req.json();

    if (!description || description.trim().length < 20) {
      return NextResponse.json(
        { error: 'Beskriv venligst dit arbejde lidt mere detaljeret.' },
        { status: 400 }
      );
    }

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: description }],
    });

    const raw = message.content
      .filter((block): block is Anthropic.TextBlock => block.type === 'text')
      .map(block => block.text)
      .join('');

    const text = raw.replace(/^```(?:json)?\s*/i, '').replace(/\s*```\s*$/i, '').trim();
    const result = JSON.parse(text);
    return NextResponse.json(result);
  } catch (err) {
    console.error('Discovery error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
