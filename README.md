## EmailJS configuration

The contact form uses EmailJS. Configure these variables in a local `.env` file at the project root:

```text
REACT_APP_EMAILJS_SERVICE_ID=
REACT_APP_EMAILJS_TEMPLATE_ID=
REACT_APP_EMAILJS_PUBLIC_KEY=
```

Keep `.env` out of Git and do not add credential values to project documentation. The contact template's approved recipient is `contact@ccpef.in`; set the recipient in the EmailJS template rather than passing it from the browser.

The EmailJS profile contact name is **CCP Environmental Foundation**. Confirm account ownership or administrative responsibility with the organization rather than treating the profile contact name as proof of ownership.
