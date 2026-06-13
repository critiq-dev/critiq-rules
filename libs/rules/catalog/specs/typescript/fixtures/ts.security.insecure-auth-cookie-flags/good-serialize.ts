declare function serialize(node: unknown): string;
declare function parse(input: string): unknown;

parse('div');
serialize(parse('div'));
