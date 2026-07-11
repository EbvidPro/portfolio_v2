import { EnvelopeSimple, GithubLogo, LinkedinLogo, FileText } from "@phosphor-icons/react";

/** Add your resume/CV URL here, or set to empty string to hide the link */
export const RESUME_URL =
  "https://drive.google.com/file/d/111_YJBffeh1zKNCaW3k4OOMnX_BffMoy/view?usp=sharing";

export const CONTACT_ITEMS = [
  {
    icon: EnvelopeSimple,
    label: "Email",
    value: "davidebenezer93@gmail.com",
    url: "mailto:davidebenezer93@gmail.com",
  },
  {
    icon: GithubLogo,
    label: "GitHub",
    value: "@EbvidPro",
    url: "https://github.com/EbvidPro",
  },
  {
    icon: LinkedinLogo,
    label: "LinkedIn",
    value: "/in/david-tobi",
    url: "https://www.linkedin.com/in/david-tobi/",
  },
];

export { FileText };
