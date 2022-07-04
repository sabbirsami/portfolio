import React from "react";
import { useMatch, useResolvedPath, Link } from "react-router-dom";
const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                className="nav-link p-0 m-2 fw-semi-bold"
                style={{
                    color: match ? "#208b65" : "#000000",
                    fontWeight: match ? "500" : "regular",
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;
