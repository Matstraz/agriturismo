import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

export default function ContactUsModal() {
  const { t } = useTranslation();
  const formRef = useRef();
  const [showModal, setShowModal] = React.useState(false);

  const [data, setData] = useState({
    name: "",
    lastName: "",
    user_email: "",
    message: "",
  });

  const inputHandle = (event) => {
    const { name, type, value, checked } = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: type !== "checkbox" ? value : checked,
      };
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t9wzee3",
        "template_0zywg33",
        formRef.current,
        "f9BocO_ldWDcRVRwp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setShowModal(false);
    alert(t("homepage.navbar.contactUsModal.alert"));
  };

  return (
    <>
      <button
        className="lg:border-0 border-b-2 md:border-white"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {t("homepage.navbar.contactUs")}
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-sm bg-transparent">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-gradient-to-b from-slate-700 to-slate-400 text-slate-200 ">
                {/*header*/}
                <div className=" border-b border-solid border-slate-200 rounded-t">
                  <p className="font-semibold text-2xl p-2 text-center uppercase">
                    {t("homepage.navbar.contactUs")}
                  </p>
                  <p className="px-2 pb-2 text-center">
                    {t("homepage.navbar.contactUsModal.title")}
                  </p>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto ">
                  <form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className="flex flex-col justify-around "
                  >
                    <input
                      type="text"
                      name="name"
                      className="p-1 mb-1 bg-slate-600"
                      placeholder={t("homepage.navbar.contactUsModal.name")}
                      onChange={inputHandle}
                      value={data.name}
                    />
                    <input
                      type="text"
                      name="lastName"
                      className="p-1 mb-1 bg-slate-600"
                      placeholder={t("homepage.navbar.contactUsModal.surname")}
                      onChange={inputHandle}
                      value={data.lastName}
                    />
                    <input
                      type="mail"
                      name="user_email"
                      className="p-1 mb-1 bg-slate-600"
                      placeholder={t("homepage.navbar.contactUsModal.email")}
                      onChange={inputHandle}
                      value={data.user_email}
                    />
                    <textarea
                      className=" bg-slate-600 "
                      placeholder={t("homepage.navbar.contactUsModal.message")}
                      onChange={inputHandle}
                      name="message"
                      value={data.message}
                    ></textarea>
                    <div className="flex items-center justify-between px-4 pt-4 rounded-b">
                      <button
                        className="rounded-lg border border-slate-300 text-slate-200 bg-slate-600 font-bold uppercase px-6 py-2 text-sm  mr-1 mb-1 "
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        {t("homepage.navbar.contactUsModal.close")}
                      </button>
                      <button
                        className="rounded-lg border border-slate-300 text-slate-200 bg-slate-600 font-bold uppercase px-6 py-2 text-sm o mr-1 mb-1"
                        type="submit"
                      >
                        {t("homepage.navbar.contactUsModal.send")}
                      </button>
                    </div>
                  </form>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
