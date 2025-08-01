import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { SiLeetcode } from "react-icons/si";
import {
	BsInstagram,
	BsGithub,
	BsLinkedin,
	BsEnvelopeAtFill,
} from "react-icons/bs";
export default function FooterCom() {
	return (
		<Footer
			container
			className="border border-t-8  border-teal-500"
		>
			<div className="w-full max-w-7xl mx-auto">
				<div className="grid w-full justify-between sm:flex md:grid-cols-1">
					<div className="mt-5">
						<Link
							to="/"
							className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
						>
							<span className="px-2 py-1 bg-gradient-to-r from-green-500 via-blue-500 to-violet-500 rounded-lg text-white">
								Kunnal's Blog
							</span>
						</Link>
					</div>
					<div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
						<div>
							<Footer.Title title="About" />
							<Footer.LinkGroup col>
								<Footer.Link href="#" target="_blank" rel="noopener noreferrer">
									Portfolio
								</Footer.Link>
								<Footer.Link href="/about">Kunnal's Blog</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title="Follow me" />
							<Footer.LinkGroup col>
								<Footer.Link
									href="https://www.github.com/kunnal23"
									target="_blank"
									rel="noopener noreferrer"
								>
									Github
								</Footer.Link>
								<Footer.Link
									href="https://www.linkedin.com/in/kunnal23/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Linkedin
								</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title="Legal" />
							<Footer.LinkGroup col>
								<Footer.Link href="#">Privacy Policy</Footer.Link>
								<Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
							</Footer.LinkGroup>
						</div>
					</div>
				</div>
				<Footer.Divider />
				<div className="w-full sm:flex sm:items-center sm:justify-between">
					<Footer.Copyright
						href="#"
						by="Kunnal's blog"
						year={new Date().getFullYear()}
					/>
					<div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
						<Footer.Icon
							href="https://www.linkedin.com/in/kunnal23/"
							target="_blank"
							rel="noopener noreferrer"
							icon={BsLinkedin}
						/>
						<Footer.Icon
							href="https://github.com/kunnal23"
							target="_blank"
							rel="noopener noreferrer"
							icon={BsGithub}
						/>
						<Footer.Icon
							href="https://leetcode.com/u/kunnal_23/"
							target="_blank"
							rel="noopener noreferrer"
							icon={SiLeetcode}
						/>
						<Footer.Icon
							href="mailto:kantkunnal2311@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							icon={BsEnvelopeAtFill}
						/>
					</div>
				</div>
			</div>
		</Footer>
	);
}
