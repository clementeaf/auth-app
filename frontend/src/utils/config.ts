export const inputConfig = [
    {
      label: "User Name",
      name: "userName",
      type: "text",
      pattern: "[A-Za-z0-9]*",
      title: "Only alphanumeric characters are allowed",
      validation: (value: string) => /^[A-Za-z0-9]*$/.test(value) || "Only alphanumeric characters are allowed",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      minLength: 8,
      maxLength: 20,
      title: "Password must be between 8 and 20 characters long",
      validation: (value: string) =>
        (value.length >= 8 && value.length <= 20) || "Password must be between 8 and 20 characters long",
    }
  ];