const background = {
    position: "fixed" as "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    backgroundColor: "#f5f4f4",
    opacity: 1,
    backgroundImage:  "radial-gradient(#000000 0.35000000000000003px, transparent 0.35000000000000003px), radial-gradient(#000000 0.35000000000000003px, #f5f4f4 0.35000000000000003px)",
    backgroundSize: "14px 14px",
    backgroundPosition: "0 0,7px 7px"
}

export const Background = () => <div style={background}></div>