import React from "react";
import HostWindow from "./HostWindow";
import StatusReportMock from "./StatusReportMock";
import MessagesMock from "./MessagesMock";

export default function SeeItInAction() {
    return (
        <section className="host-action" aria-labelledby="see-it-heading">
            <h2 id="see-it-heading" className="host-action-label">
                See it in action
            </h2>
            <div className="host-action-grid">
                <figure className="host-shot">
                    <HostWindow title="Eclipse Gala 2026 · Status">
                        <StatusReportMock />
                    </HostWindow>
                    <figcaption className="host-shot-caption">
                        Generate a status report of your event — schedule, tasks, vendors and activity — and share it with your whole team or clients in one click.
                    </figcaption>
                </figure>
                <figure className="host-shot">
                    <HostWindow title="Eclipse Gala 2026 · Messages">
                        <MessagesMock />
                    </HostWindow>
                    <figcaption className="host-shot-caption">
                        Coordinate everyone on your event in one place — producers, vendors and sponsors in the same conversation, resolving issues in real time.
                    </figcaption>
                </figure>
            </div>
        </section>
    );
}
