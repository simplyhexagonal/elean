import elean from './';

describe('elean', () => {
  it('works', async () => {
    // false
    let ENV_VAR;
    expect(elean(ENV_VAR)).toBe(false);

    ENV_VAR = '';
    expect(elean(ENV_VAR)).toBe(false);

    ENV_VAR = 'undefined';
    expect(elean(ENV_VAR)).toBe(false);

    ENV_VAR = null;
    expect(elean(ENV_VAR)).toBe(false);

    ENV_VAR = 'null';
    expect(elean(ENV_VAR)).toBe(false);

    ENV_VAR = 'NULL';
    expect(elean(ENV_VAR)).toBe(false);

    ENV_VAR = 0;
    expect(elean(ENV_VAR)).toBe(false);

    ENV_VAR = '0';
    expect(elean(ENV_VAR)).toBe(false);

    ENV_VAR = false;
    expect(elean(ENV_VAR)).toBe(false);

    ENV_VAR = 'false';
    expect(elean(ENV_VAR)).toBe(false);

    ENV_VAR = 'FALSE';
    expect(elean(ENV_VAR)).toBe(false);

    // true
    ENV_VAR = 'xyz';
    expect(elean(ENV_VAR)).toBe(true);

    ENV_VAR = 1;
    expect(elean(ENV_VAR)).toBe(true);

    ENV_VAR = '1';
    expect(elean(ENV_VAR)).toBe(true);

    ENV_VAR = true;
    expect(elean(ENV_VAR)).toBe(true);

    ENV_VAR = 'true';
    expect(elean(ENV_VAR)).toBe(true);

    ENV_VAR = 'TRUE';
    expect(elean(ENV_VAR)).toBe(true);
  });
});
