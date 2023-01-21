import isDefined from "helpers/isDefined";

const classNames = (...values: (string | undefined)[]) => values.filter(isDefined).join(' ');

export default classNames