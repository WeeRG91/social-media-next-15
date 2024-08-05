"use client";

import { updateProfile } from "@/lib/actions";
import { User } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useActionState, useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import UpdateButton from "./UpdateButton";

function UpdateUser({ user }: { user: User }) {
  const [open, setOpen] = useState(false);
  const [cover, setCover] = useState<any>(false);

  const [state, formAction] = useActionState(updateProfile, {
    success: false,
    error: false,
  });

  const router = useRouter()

  const handleClose = () => {
    setOpen(false);
    state.success && router.refresh();
  };

  return (
    <div>
      <span
        className="text-blue-500 text-sm cursor-pointer"
        onClick={() => setOpen(true)}
      >
        Update
      </span>

      {open && (
        <div
          className="absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
        >
          <form
            action={(formData) => formAction({formData, cover: cover?.secure_url || ""})}
            className="relative p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 lg:w-1/3"
          >
            <div
              onClick={handleClose}
              className="absolute text-lg font-extrabold text-red-600 right-4 top-3 cursor-pointer"
            >
              X
            </div>
            {/* Title */}
            <h1 className="font-bold text-xl">Update Profile</h1>
            <div className="text-xs text-gray-500">
              Use the navbar profile to change the avatar or username.
            </div>
            {/* Cover Picture upload */}
            <CldUploadWidget
              uploadPreset="social"
              onSuccess={(result) => setCover(result.info)}
            >
              {({ open }) => {
                return (
                  <div
                    className="flex flex-col gap-4 my-4"
                    onClick={() => open()}
                  >
                    <label htmlFor="">Cover Picture</label>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Image
                        src={user.cover || "/noCover.png"}
                        alt=""
                        width={48}
                        height={32}
                        className="w-12 h-8 rounded-md object-cover"
                      />
                      <span className="text-xs underline text-gray-600">
                        Change
                      </span>
                    </div>
                  </div>
                );
              }}
            </CldUploadWidget>

            {/* <div className="flex flex-col gap-4 my-4">
              <label htmlFor="">Cover Picture</label>
              <div className="flex items-center gap-2 cursor-pointer">
                <Image
                  src={user.cover || "/noCover.png"}
                  alt=""
                  width={48}
                  height={32}
                  className="w-12 h-8 rounded-md object-cover"
                />
                <span className="text-xs underline text-gray-600">Change</span>
              </div>
            </div> */}

            {/* Profile detail update */}
            <div className="flex flex-wrap justify-between gap-2 xl:gap-3">
              <div className="flex flex-col gap-4">
                <label htmlFor="name" className="text-xs text-gray-500">
                  First Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={user.name || "John"}
                  className="ring-1 ring-gray-300 p-[10px] rounded-md text-sm"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="surname" className="text-xs text-gray-500">
                  Surname
                </label>
                <input
                  id="surname"
                  name="surname"
                  type="text"
                  placeholder={user.surname || "Doe"}
                  className="ring-1 ring-gray-300 p-[10px] rounded-md text-sm"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="description" className="text-xs text-gray-500">
                  Description
                </label>
                <input
                  id="description"
                  name="description"
                  type="text"
                  placeholder={user.description || "Life is beautiful..."}
                  className="ring-1 ring-gray-300 p-[10px] rounded-md text-sm"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="city" className="text-xs text-gray-500">
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder={user.city || "Bangkok"}
                  className="ring-1 ring-gray-300 p-[10px] rounded-md text-sm"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="school" className="text-xs text-gray-500">
                  School
                </label>
                <input
                  id="school"
                  name="school"
                  type="text"
                  placeholder={user.school || "Bangkok International school"}
                  className="ring-1 ring-gray-300 p-[10px] rounded-md text-sm"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="work" className="text-xs text-gray-500">
                  Work
                </label>
                <input
                  id="work"
                  name="work"
                  type="text"
                  placeholder={user.work || "IMB"}
                  className="ring-1 ring-gray-300 p-[10px] rounded-md text-sm"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="website" className="text-xs text-gray-500">
                  Website
                </label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  placeholder={user.website || "dev.dev"}
                  className="ring-1 ring-gray-300 p-[10px] rounded-md text-sm"
                />
              </div>
            </div>
            <UpdateButton />
            {state.success && <span className="text-green-500">Profile has updated</span>}
            {state.error && <span className="text-red-500">Something went wrong</span>}
          </form>
        </div>
      )}
    </div>
  );
}

export default UpdateUser;
