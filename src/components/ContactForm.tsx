import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { CgSpinner } from "react-icons/cg";
import { z } from "zod";

const MessageSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name must be under 50 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address")
    .max(100, "Email must be under 100 characters"),
  subject: z
    .string()
    .min(1, "Subject is required")
    .max(255, "Subject must be under 255 characters"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(255, "Subject must be under 255 characters"),
});

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(MessageSchema) });

  console.log("errors: ", errors);

  const onSubmit = async (data: FieldValues) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <section className="custom-bg p-7 relative">
      <div className="absolute top-0 right-7">
        <img
          decoding="async"
          src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2.png"
          alt="Star"
        />
      </div>
      <h2 className="text-2xl sm:text-[44px] font-medium leading-tight mt-2 ">
        Let's work <span className="text-accent">together.</span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 my-8">
          <div>
            <input
              {...register("name")}
              type="text"
              className="px-5 py-4 bg-primary-gradient shadow-custom rounded-lg text-sm outline-none w-full"
              placeholder="Name *"
            />
            {errors?.name && (
              <p className="error">{`${errors.name.message}`}</p>
            )}
          </div>

          <div>
            <input
              {...register("email")}
              type="email"
              className="px-5 py-4 bg-primary-gradient shadow-custom rounded-lg text-sm outline-none w-full"
              placeholder="Email *"
            />
            {errors?.email && (
              <p className="error">{`${errors.email.message}`}</p>
            )}
          </div>

          <div>
            <input
              {...register("subject")}
              type="text"
              className="px-5 py-4 bg-primary-gradient shadow-custom rounded-lg text-sm outline-none w-full"
              placeholder="Your Subject *"
            />
            {errors?.subject && (
              <p className="error">{`${errors.subject.message}`}</p>
            )}
          </div>

          <div>
            <textarea
              {...register("message")}
              className="px-5 py-4 h-28 max-h-40 bg-primary-gradient shadow-custom rounded-lg text-sm outline-none w-full"
              placeholder="Your Message *"
            />
            {errors?.message && (
              <p className="error">{`${errors.message.message}`}</p>
            )}
          </div>

          <button
            type="submit"
            className="py-4 bg-[#323232] text-sm rounded-lg shadow-custom btn--hover flex justify-center items-center gap-2"
          >
            <p>Send Message</p>
            {isSubmitting && <CgSpinner className=" animate-spin " />}
          </button>

          {errors?.message && (
            <p className="border-2 border-yellow-400 px-4 py-1 text-sm opacity-75 mt-5">
              One or more fields have an error. Please check and try again.
            </p>
          )}
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
