import React from "react";

function Footer() {
  return (
    <footer class="footer-1 fixed w-full bottom-0 text-white bg-blue-400 py-8 sm:py-12">
        <div class="sm:flex w-full mx-5 justify-between border-t">
          <div class="sm:w-full px-4 md:w-1/6">
            <strong>Products</strong>
          </div>
          <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 class="font-bold mb-2">Contact Us</h6>
            <address class="not-italic mb-4 text-sm">
              123 6th Nyeri
              <br />
              083232323
            </address>
          </div>
          <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 class="font-bold mb-2">Socials</h6>
                      <ul>
                          <li>Facebook</li>
                          <li>Instagram</li>
                          <li>Whatsapp</li>
            </ul>
          </div>
          <div class="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
            <button class="px-4 py-2 bg-gray-500 hover:bg-gray-700 rounded text-white">
              Get Started
            </button>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
