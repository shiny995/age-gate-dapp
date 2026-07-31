// Age eligibility logic test (mirrors circuit's threshold check)
function checkEligibility(age, threshold = 18) {
  return age >= threshold;
}

describe('Age Eligibility Circuit', () => {
  test('age above threshold returns true', () => {
    const result = checkEligibility(25);
    expect(result).toBe(true);
  });

  test('age below threshold returns false', () => {
    const result = checkEligibility(15);
    expect(result).toBe(false);
  });

  test('age equal to threshold returns true', () => {
    const result = checkEligibility(18);
    expect(result).toBe(true);
  });
});
