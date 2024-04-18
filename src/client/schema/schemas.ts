import { date, InferType, object, string } from "yup";
import * as yup from "yup";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export let registerUserSchema = yup.object({
  username: string().required(),
  dob: date().required("please enter a date of birth"),
  email: yup.string().email("must be a valid email").required(),
  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      passwordRegex,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  createdOn: date().default(() => new Date()),
});

type User = InferType<typeof registerUserSchema>;
{
  username: string;
  dob: date;
  email: string;
  password: string;
  createdOn: Date;
}
