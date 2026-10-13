import React from "react";

export default function HostWindow({ title, children }) {
    return (
        <div className="host-window">
            <div className="host-window-bar">
                <span className="host-window-dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                </span>
                <span className="host-window-title">{title}</span>
            </div>
            <div className="host-window-fit">{children}</div>
        </div>
    );
}
