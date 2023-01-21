import isUndefined from "helpers/isUndefined";

const isDefined = (value: unknown) => !isUndefined(value);

export default isDefined;