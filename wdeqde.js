export function calculateDistance(x1, x2) {
  return Math.abs(x2 - x1);
}

export function calculateSegmentProduct(A, B, C) {
  const AC = calculateDistance(A, C);
  const BC = calculateDistance(B, C);
  return AC * BC;
}
