import React from "react";

export default function Navbar() {
  return (
    <div className="flex flex-col justify-between py-7 border-r-2 border-muted/50">
      <section className="flex flex-col items-center w-21.5 text-center justify-center mx-auto gap-4">
        <div className="mx-auto">
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="38"
              height="38"
              rx="19"
              fill="#02439F"
              fill-opacity="0.2"
            />
            <rect x="10" y="10" width="18" height="18" rx="9" fill="#02439F" />
          </svg>
        </div>

        <div className="flex flex-col items-center w-16 h-16 text-center justify-center mx-auto space-y-1 bg-muted/55 rounded-lg mt-2.5">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.08333 0.75H1.63889C1.14797 0.75 0.75 1.14797 0.75 1.63889V6.08333C0.75 6.57425 1.14797 6.97222 1.63889 6.97222H6.08333C6.57425 6.97222 6.97222 6.57425 6.97222 6.08333V1.63889C6.97222 1.14797 6.57425 0.75 6.08333 0.75Z"
              stroke="#E3E5E8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.08333 10.5278H1.63889C1.14797 10.5278 0.75 10.9257 0.75 11.4167V15.8611C0.75 16.352 1.14797 16.75 1.63889 16.75H6.08333C6.57425 16.75 6.97222 16.352 6.97222 15.8611V11.4167C6.97222 10.9257 6.57425 10.5278 6.08333 10.5278Z"
              stroke="#E3E5E8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.5278 1.63889H16.75"
              stroke="#E3E5E8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.5278 6.08334H16.75"
              stroke="#E3E5E8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.5278 11.4167H16.75"
              stroke="#E3E5E8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.5278 15.8611H16.75"
              stroke="#E3E5E8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-[11.5px]">Tasks</p>
        </div>

        <div className="flex flex-col items-center w-16 h-16 text-center justify-center mx-auto space-y-1 -mt-1">
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.66969 2.64235C6.7189 2.12459 6.95939 1.64377 7.34416 1.29384C7.72893 0.943908 8.23035 0.75 8.75045 0.75C9.27054 0.75 9.77196 0.943908 10.1567 1.29384C10.5415 1.64377 10.782 2.12459 10.8312 2.64235C10.8608 2.97682 10.9705 3.29924 11.1511 3.58232C11.3317 3.8654 11.5778 4.10081 11.8686 4.26862C12.1595 4.43642 12.4865 4.53169 12.8219 4.54636C13.1574 4.56102 13.4914 4.49465 13.7958 4.35287C14.2684 4.1383 14.804 4.10725 15.2982 4.26577C15.7924 4.42428 16.21 4.76103 16.4697 5.21045C16.7293 5.65988 16.8125 6.18984 16.7029 6.69719C16.5934 7.20454 16.299 7.65297 15.877 7.95522C15.6022 8.14802 15.3779 8.40416 15.2231 8.70198C15.0682 8.99979 14.9874 9.33052 14.9874 9.66619C14.9874 10.0019 15.0682 10.3326 15.2231 10.6304C15.3779 10.9282 15.6022 11.1844 15.877 11.3772C16.299 11.6794 16.5934 12.1278 16.7029 12.6352C16.8125 13.1425 16.7293 13.6725 16.4697 14.1219C16.21 14.5714 15.7924 14.9081 15.2982 15.0666C14.804 15.2251 14.2684 15.1941 13.7958 14.9795C13.4914 14.8377 13.1574 14.7714 12.8219 14.786C12.4865 14.8007 12.1595 14.8959 11.8686 15.0638C11.5778 15.2316 11.3317 15.467 11.1511 15.7501C10.9705 16.0331 10.8608 16.3556 10.8312 16.69C10.782 17.2078 10.5415 17.6886 10.1567 18.0385C9.77196 18.3885 9.27054 18.5824 8.75045 18.5824C8.23035 18.5824 7.72893 18.3885 7.34416 18.0385C6.95939 17.6886 6.7189 17.2078 6.66969 16.69C6.64016 16.3554 6.53043 16.0329 6.3498 15.7497C6.16916 15.4665 5.92293 15.231 5.63198 15.0632C5.34102 14.8954 5.0139 14.8002 4.67833 14.7856C4.34275 14.771 4.00861 14.8375 3.7042 14.9795C3.23159 15.1941 2.69605 15.2251 2.2018 15.0666C1.70756 14.9081 1.28998 14.5714 1.03033 14.1219C0.770681 13.6725 0.68754 13.1425 0.79709 12.6352C0.906639 12.1278 1.20104 11.6794 1.623 11.3772C1.89777 11.1844 2.12207 10.9282 2.27691 10.6304C2.43176 10.3326 2.5126 10.0019 2.5126 9.66619C2.5126 9.33052 2.43176 8.99979 2.27691 8.70198C2.12207 8.40416 1.89777 8.14802 1.623 7.95522C1.20163 7.65282 0.907751 7.20456 0.798467 6.69755C0.689182 6.19055 0.772302 5.66103 1.03167 5.21189C1.29104 4.76275 1.70813 4.42609 2.20188 4.26733C2.69564 4.10858 3.23078 4.13906 3.70331 4.35287C4.00768 4.49465 4.34173 4.56102 4.67718 4.54636C5.01264 4.53169 5.33962 4.43642 5.63046 4.26862C5.9213 4.10081 6.16743 3.8654 6.34801 3.58232C6.5286 3.29924 6.63832 2.97682 6.6679 2.64235" stroke="#ABB0BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.75 12.3463C10.2299 12.3463 11.4297 11.1466 11.4297 9.66663C11.4297 8.18669 10.2299 6.98697 8.75 6.98697C7.27006 6.98697 6.07034 8.18669 6.07034 9.66663C6.07034 11.1466 7.27006 12.3463 8.75 12.3463Z" stroke="#ABB0BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p className="text-[11.5px] text-muted-foreground">Settings</p>
        </div>
      </section>

      <section className="flex flex-col gap-5 items-center justify-center ">
        <div className="">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H6.75" stroke="#ABB0BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12.75L15.75 9L12 5.25" stroke="#ABB0BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.75 9H6.75" stroke="#ABB0BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>

        
        <div className="bg-primary rounded-full w-10 h-10 mx-auto text-center grid place-content-center">
            <p className="text-[14px]">MD</p>
        </div>
      </section>
    </div>
  );
}
