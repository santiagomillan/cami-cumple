import Image from "next/image";

export default function Testimonials() {
  return (
    <>
      <div className="mx-auto text-center w-11/12 md:w-4/5 ">
        <p className="mb-6 pb-2 text-neutral-600 dark:text-neutral-300 md:mb-12 md:pb-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
      </div>

      <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12 w-4/5 md:w-4/5 pb-10">
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <Image
              alt=""
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
              width={40}
              height={40}
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">Maria Smantha</h5>
          <p className="mb-4 text-neutral-600 dark:text-neutral-300">
            <span className="inline-block pe-2 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
              </svg>
            </span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
          </p>
        </div>
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <Image
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
              alt=""
              width={40}
              height={40}
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">Lisa Cudrow</h5>

          <p className="mb-4 text-neutral-600 dark:text-neutral-300">
            <span className="inline-block pe-2 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
              </svg>
            </span>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid commodi.
          </p>
        </div>
        <div className="mb-0">
          <div className="mb-6 flex justify-center">
            <Image
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
              alt=""
              width={40}
              height={40}
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">John Smith</h5>

          <p className="mb-4 text-neutral-600 dark:text-neutral-300">
            <span className="inline-block pe-2 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
              </svg>
            </span>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti.
          </p>
        </div>
      </div>

      {/* 2 col */}
      <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12 w-4/5 md:w-4/5 pb-10">
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <Image
              alt=""
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
              width={40}
              height={40}
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">Maria Smantha</h5>
          <p className="mb-4 text-neutral-600 dark:text-neutral-300">
            <span className="inline-block pe-2 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
              </svg>
            </span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
          </p>
        </div>
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <Image
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
              alt=""
              width={40}
              height={40}
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">Lisa Cudrow</h5>

          <p className="mb-4 text-neutral-600 dark:text-neutral-300">
            <span className="inline-block pe-2 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
              </svg>
            </span>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid commodi.
          </p>
        </div>
        <div className="mb-0">
          <div className="mb-6 flex justify-center">
            <Image
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
              alt=""
              width={40}
              height={40}
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">John Smith</h5>

          <p className="mb-4 text-neutral-600 dark:text-neutral-300">
            <span className="inline-block pe-2 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
              </svg>
            </span>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti.
          </p>
        </div>
      </div>
    </>
  );
}
