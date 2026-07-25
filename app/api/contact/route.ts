import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

/**
 * This route currently just validates the payload and returns success.
 * Wire it up to a real email service (Resend, Postmark, SES) or a
 * database write before relying on it in production.
 */
export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "The request body was not valid JSON." },
      { status: 400 }
    );
  }

  const { name, email, message } = payload;

  if (!isNonEmptyString(name) || !isNonEmptyString(email) || !isNonEmptyString(message)) {
    return NextResponse.json(
      { ok: false, message: "Name, email and message are all required." },
      { status: 422 }
    );
  }

  // TODO: send this on to a real email service or store it.
  // eslint-disable-next-line no-console
  console.log("New contact message", { name, email, message });

  return NextResponse.json({
    ok: true,
    message: "Thanks, that message is in. A reply usually goes out within a day.",
  });
}
