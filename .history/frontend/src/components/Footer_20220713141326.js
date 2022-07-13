import React from "react";

function Footer() {
  return (
    <footer class="fixed bottom-0">
      <div class="footer-1  flex mx-auto px-4  text-white bg-blue-400 py-8 sm:py-12">
        <div class="sm:flex sm:flex-wrap border-t">
          <div class="sm:w-full px-4 md:w-1/6">
            <strong>Products</strong>
          </div>
          <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 class="font-bold mb-2">Address</h6>
            <address class="not-italic mb-4 text-sm">
              123 6th St.
              <br />
              Melbourne, FL 32904
            </address>
          </div>
          <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 class="font-bold mb-2">Free Resources</h6>
            <p class="mb-4 text-sm">
              Use our HTML blocks for <strong>FREE</strong>.<br />
              <em>All are MIT License</em>
            </p>
          </div>
          <div class="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
            <button class="px-4 py-2 bg-gray-500 hover:bg-gray-700 rounded text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
