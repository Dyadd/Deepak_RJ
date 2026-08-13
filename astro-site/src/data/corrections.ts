/**
 * The corrections register. Newest first.
 * Each entry records what a published piece claimed, and what turned out
 * to be right instead. Keep `claimed` close to the original wording.
 */
export interface Correction {
  /** YYYY-MM-DD — when the correction was logged, not when the mistake was made. */
  date: string;
  /** The original claim, as published. */
  claimed: string;
  /** What I now believe, and what changed my mind. */
  correction: string;
  /** The post the claim appeared in, if it was in a post. */
  post?: { slug: string; title: string };
}

export const corrections: Correction[] = [
  // {
  //   date: '2026-08-13',
  //   claimed: 'The effect size in trial X supported claim Y.',
  //   correction: 'The trial was underpowered for that subgroup; the honest read is "no evidence either way".',
  //   post: { slug: 'on-whether-medicine-works', title: 'On whether medicine works' },
  // },
];
