import React from "react";
import { reportError } from "../../utils/errorHandler";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_HOST_ENDPOINT;

function HostEarlyAccess({ idPrefix }) {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    organizationName: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState(null);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const nameRef = React.useRef(null);
  const panelId = `${idPrefix}-panel`;

  React.useEffect(() => {
    if (open && !isSuccess && nameRef.current) {
      nameRef.current.focus();
    }
  }, [open, isSuccess]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!FORMSPREE_ENDPOINT || FORMSPREE_ENDPOINT.trim() === "") {
      setSubmitMessage("This form is not configured yet. Email us at info@revayahg.com.");
      setIsSuccess(false);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          organization_name: formData.organizationName.trim(),
          _subject: "Revaya Host early access",
          source: "Revaya Host early access",
        }),
      });

      if (response.ok) {
        setSubmitMessage("You're on the list.");
        setIsSuccess(true);
        setFormData({ name: "", email: "", organizationName: "" });
      } else {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send request");
      }
    } catch (error) {
      reportError(error);
      setSubmitMessage(
        "Sorry, that didn't send. Please try again or email us at info@revayahg.com."
      );
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="host-access">
      <button
        type="button"
        className="cta-button-primary host-access-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
      >
        <i className="fas fa-envelope" aria-hidden="true"></i>
        Request Early Access
      </button>

      {open && (
        <div className="host-access-panel" id={panelId}>
          {isSuccess ? (
            <p className="host-access-message host-access-message--success" role="status">
              {submitMessage}
            </p>
          ) : (
            <form className="host-access-form" onSubmit={handleSubmit}>
              <p className="host-access-key">
                <span className="host-access-required">*</span> Required
              </p>
              <div className="host-access-field">
                <label htmlFor={`${idPrefix}-name`}>Name</label>
                <input
                  ref={nameRef}
                  id={`${idPrefix}-name`}
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="host-access-field">
                <label htmlFor={`${idPrefix}-email`}>
                  Email <span className="host-access-required" aria-hidden="true">*</span>
                </label>
                <input
                  id={`${idPrefix}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  aria-required="true"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="host-access-field">
                <label htmlFor={`${idPrefix}-org`}>Organization name</label>
                <input
                  id={`${idPrefix}-org`}
                  name="organizationName"
                  type="text"
                  autoComplete="organization"
                  value={formData.organizationName}
                  onChange={handleChange}
                />
              </div>
              <p className="host-access-note">
                By submitting, you agree that Revaya Hospitality Group may email you about early access and send occasional product and marketing updates. You can unsubscribe at any time.{" "}
                <a href="/privacy">Privacy policy</a>
              </p>
              {submitMessage && (
                <p className="host-access-message host-access-message--error" role="alert">
                  {submitMessage}
                </p>
              )}
              <button type="submit" className="host-access-submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending…" : "Submit"}
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default HostEarlyAccess;
