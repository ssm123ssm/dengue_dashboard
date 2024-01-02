export default function LoginLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-row relative sm:items-center sm:justify-center h-screen w-screen">
      <div className="h-screen md:w-1/2 sm:w-2/3 sm:h-fit m-auto z-10 bg-white">
        {children}
      </div>
      <div
        className="h-screen z-0 md:w-1/2 sm:hidden md:block bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('./assets/images/m.jpg')" }}
      ></div>
    </section>
  );
}
