import Logo from "../atoms/Logo";
import LinkItem from "../atoms/LinkItem";
import FooterNavigator from "../../navigators/FooterNavigator";

export default function Footer() {
  return (
    <footer className="bg-light dark:bg-dark border-t-4 border-primary">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Logo href="/" src="/megane.png" name="Megane API" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-2 text-lg font-semibold text-dark uppercase dark:text-light">
                Legal
              </h2>
              <ul className="flex flex-col gap-2 p-0 text-dark dark:text-subdark font-medium">
                {FooterNavigator.routes.map((navigator) => {
                  return (
                    <li>
                      <LinkItem href={navigator.path}>
                        {navigator.name}
                      </LinkItem>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-dark sm:text-center dark:text-subdark">
            © {new Date().getFullYear() + " "}
            <LinkItem href="/" className="hover:underline">
              Megane API
            </LinkItem>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
