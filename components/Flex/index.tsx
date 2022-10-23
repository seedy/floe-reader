import { styled } from "stitches.config";

const Flex = styled("div", {
  boxSizing: "border-box",
  display: "flex",
  variants: {
    direction: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
    },
    align: {
      center: {
        alignItems: "center",
      },
      start: {
        alignItems: "flex-start",
      },
      end: {
        alignItems: "flex-end",
      },
      spaceBetween: {
        alignItems: "space-between",
      },
    },
    justify: {
      center: {
        justifyContent: "center",
      },
      start: {
        justifyContent: "flex-start",
      },
      end: {
        justifyContent: "flex-end",
      },
      spaceBetween: {
        justifyContent: "space-between",
      },
    },
    grow: {
      true: {
        flexGrow: 1,
      },
    },
  },
});

export default Flex;
