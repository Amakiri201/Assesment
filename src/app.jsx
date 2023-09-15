import React from "react";

const App = () => {
  return (
    <>  
    <div className="main">
      <div className="top-hero">
        <nav className="navigation-bar top-navigation-bar">
          <div>
            <svg
              width={156}
              height={40}
              viewBox="0 0 156 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.6471 8.43938C31.0613 7.85354 30.1032 7.85354 29.5173 8.43938L26.4643 11.4948C25.2134 10.6627 23.7779 10.2497 22.3365 10.2497C20.4174 10.2497 18.4737 10.9822 17.0337 12.4469L12.5336 16.9472C9.96732 19.5106 9.65099 23.4747 11.5787 26.384L8.52587 29.4394C7.94003 30.0253 7.94003 30.9745 8.52587 31.5606C8.81891 31.8536 9.20267 32 9.58643 32C9.97044 32 10.354 31.8536 10.647 31.5606L13.6998 28.5051C14.9509 29.3372 16.395 29.7502 17.8365 29.7502C19.7306 29.7502 21.6743 29.0178 23.1393 27.553L27.6307 23.053C30.197 20.4893 30.5133 16.5252 28.5854 13.616L31.6471 10.5605C32.2329 9.97466 32.2329 9.02522 31.6471 8.43938ZM26.8276 17.75C26.8276 18.9512 26.3589 20.0821 25.5096 20.9317L21.0182 25.4317C20.1657 26.2813 19.013 26.75 17.8365 26.75C17.1568 26.75 16.5064 26.5832 15.9088 26.2988L18.1223 24.0605C18.7082 23.4747 18.7082 22.5255 18.1223 21.9394C17.5612 21.3536 16.612 21.3536 16.0261 21.9394L13.7879 24.1777C13.5009 23.5829 13.3367 22.9325 13.3367 22.25C13.3367 21.0488 13.8054 19.9179 14.655 19.0683L19.1301 14.5683C19.9797 13.7187 21.1353 13.25 22.3365 13.25C23.0162 13.25 23.6635 13.4168 24.2613 13.7012L21.9791 15.9862C21.3933 16.572 21.3933 17.5212 21.9791 18.1073C22.2722 18.4004 22.6557 18.5468 23.0397 18.5468C23.4206 18.5468 23.8043 18.4004 24.0971 18.1073L26.3767 15.8223C26.6635 16.4168 26.8276 17.0674 26.8276 17.75Z"
                fill="#0065FE"
              />
              <path
                d="M40.0865 8V32"
                stroke="#0065FE"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                d="M55.3825 27.336C52.0465 27.336 49.7185 25.752 48.7825 23.184L51.6145 21.528C52.2625 23.232 53.5585 24.096 55.4785 24.096C57.3265 24.096 58.1665 23.352 58.1665 22.32C58.1665 21.72 57.9025 21.264 57.3745 20.952C56.8465 20.616 55.9105 20.256 54.5425 19.872C53.0305 19.416 52.1185 19.056 51.0625 18.312C50.0305 17.544 49.4785 16.392 49.4785 14.856C49.4785 13.344 50.0065 12.12 51.0865 11.232C52.1665 10.32 53.4865 9.864 54.9985 9.864C57.7105 9.864 59.8465 11.256 60.9985 13.632L58.2145 15.24C57.5425 13.8 56.4625 13.08 54.9985 13.08C53.6305 13.08 52.7905 13.776 52.7905 14.76C52.7905 15.288 53.0065 15.72 53.4385 16.056C53.8945 16.368 54.7345 16.728 55.9825 17.112L57.1345 17.496C57.3985 17.568 57.7585 17.712 58.2145 17.904C58.6705 18.072 59.0305 18.24 59.2705 18.408C59.7745 18.72 60.5425 19.32 60.8545 19.896C61.2145 20.472 61.4785 21.312 61.4785 22.272C61.4785 23.832 60.9025 25.056 59.7745 25.968C58.6465 26.88 57.1825 27.336 55.3825 27.336ZM71.4895 27.336C68.9695 27.336 66.8815 26.496 65.2255 24.816C63.5695 23.136 62.7535 21.072 62.7535 18.6C62.7535 16.128 63.5695 14.04 65.2255 12.384C66.8815 10.704 68.9695 9.864 71.4895 9.864C74.5375 9.864 77.2735 11.4 78.7135 13.824L75.8575 15.48C75.0175 13.968 73.4095 13.08 71.4895 13.08C69.8575 13.08 68.5375 13.584 67.5295 14.616C66.5455 15.648 66.0415 16.968 66.0415 18.6C66.0415 20.208 66.5455 21.528 67.5295 22.56C68.5375 23.592 69.8575 24.096 71.4895 24.096C73.4095 24.096 75.0655 23.184 75.8575 21.72L78.7135 23.376C77.2735 25.8 74.5615 27.336 71.4895 27.336ZM80.748 27V10.2H84.06V27H80.748ZM92.6481 27.336C89.3121 27.336 86.9841 25.752 86.0481 23.184L88.8801 21.528C89.5281 23.232 90.8241 24.096 92.7441 24.096C94.5921 24.096 95.4321 23.352 95.4321 22.32C95.4321 21.72 95.1681 21.264 94.6401 20.952C94.1121 20.616 93.1761 20.256 91.8081 19.872C90.2961 19.416 89.3841 19.056 88.3281 18.312C87.2961 17.544 86.7441 16.392 86.7441 14.856C86.7441 13.344 87.2721 12.12 88.3521 11.232C89.4321 10.32 90.7521 9.864 92.2641 9.864C94.9761 9.864 97.1121 11.256 98.2641 13.632L95.4801 15.24C94.8081 13.8 93.7281 13.08 92.2641 13.08C90.8961 13.08 90.0561 13.776 90.0561 14.76C90.0561 15.288 90.2721 15.72 90.7041 16.056C91.1601 16.368 92.0001 16.728 93.2481 17.112L94.4001 17.496C94.6641 17.568 95.0241 17.712 95.4801 17.904C95.9361 18.072 96.2961 18.24 96.5361 18.408C97.0401 18.72 97.8081 19.32 98.1201 19.896C98.4801 20.472 98.7441 21.312 98.7441 22.272C98.7441 23.832 98.1681 25.056 97.0401 25.968C95.9121 26.88 94.4481 27.336 92.6481 27.336ZM106.125 27.336C102.789 27.336 100.461 25.752 99.5247 23.184L102.357 21.528C103.005 23.232 104.301 24.096 106.221 24.096C108.069 24.096 108.909 23.352 108.909 22.32C108.909 21.72 108.645 21.264 108.117 20.952C107.589 20.616 106.653 20.256 105.285 19.872C103.773 19.416 102.861 19.056 101.805 18.312C100.773 17.544 100.221 16.392 100.221 14.856C100.221 13.344 100.749 12.12 101.829 11.232C102.909 10.32 104.229 9.864 105.741 9.864C108.453 9.864 110.589 11.256 111.741 13.632L108.957 15.24C108.285 13.8 107.205 13.08 105.741 13.08C104.373 13.08 103.533 13.776 103.533 14.76C103.533 15.288 103.749 15.72 104.181 16.056C104.637 16.368 105.477 16.728 106.725 17.112L107.877 17.496C108.141 17.568 108.501 17.712 108.957 17.904C109.413 18.072 109.773 18.24 110.013 18.408C110.517 18.72 111.285 19.32 111.597 19.896C111.957 20.472 112.221 21.312 112.221 22.272C112.221 23.832 111.645 25.056 110.517 25.968C109.389 26.88 107.925 27.336 106.125 27.336ZM128.4 24.816C126.696 26.496 124.632 27.336 122.208 27.336C119.784 27.336 117.72 26.496 116.016 24.816C114.336 23.112 113.496 21.048 113.496 18.6C113.496 16.152 114.336 14.088 116.016 12.408C117.72 10.704 119.784 9.864 122.208 9.864C124.632 9.864 126.696 10.704 128.4 12.408C130.104 14.088 130.944 16.152 130.944 18.6C130.944 21.048 130.104 23.112 128.4 24.816ZM118.344 22.56C119.376 23.592 120.672 24.096 122.208 24.096C123.744 24.096 125.04 23.592 126.072 22.56C127.104 21.528 127.632 20.208 127.632 18.6C127.632 16.992 127.104 15.672 126.072 14.64C125.04 13.608 123.744 13.08 122.208 13.08C120.672 13.08 119.376 13.608 118.344 14.64C117.312 15.672 116.784 16.992 116.784 18.6C116.784 20.208 117.312 21.528 118.344 22.56ZM146.063 27H142.487L139.103 21.168H136.583V27H133.271V10.2H139.991C141.551 10.2 142.871 10.752 143.951 11.832C145.031 12.912 145.583 14.232 145.583 15.768C145.583 17.856 144.287 19.776 142.343 20.664L146.063 27ZM139.991 13.296H136.583V18.264H139.991C141.239 18.264 142.271 17.136 142.271 15.768C142.271 14.4 141.239 13.296 139.991 13.296Z"
                fill="#0065FE"
              />
            </svg>
          </div>
          <div className="navigation-bar">
            <p className="nav-list">My URLs</p>
            <select id="drop-down">
              <option value="">Features</option>
            </select>
            <p>Pricing</p>
            <p>Analytics</p>
            <p>FAQs</p>
          </div>
          <div className="nav-button">
            <p>
              <a href="#" className="underline">
                Log in
              </a>
            </p>
            <button className="try-button">Try for free</button>
          </div>
        </nav>
        <div className="head-info">
          <h1 className="heading1">
            Optimize Your Online Experience with Our
            <br />
            Advanced <span>URL Shortening</span> Solution
          </h1>
          <svg
            width={174}
            height={21}
            viewBox="0 0 174 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M162.517 0.905029C75.1007 1.58333 17.7488 11.4833 0 16.3486L9.28502 15.694L2.32125 17.9693L10.2135 17.6848L6.03526 19.3913L12.0705 20.8133C52.0748 16.4528 149.09 6.6406 173.63 5.2387L155.524 4.88668C165.556 3.5543 166.666 3.60686 166.666 3.60686C166.666 3.60686 162.517 2.61145 162.517 0.905029Z"
              fill="#005AE2"
            />
          </svg>
          <p className="heroFont">
            Personalize your shortened URLs to align with your brand identity.
            Utilize custom slugs,
            <br />
            branded links, and domain customization options to reinforce your
            brand presence and
            <br />
            enhance user engagement.
          </p>
        </div>
        <div className="login-holder">
          <button className="signup-button">Sign up</button>
          <p>
            <a href="#" className="underline">
              Learn more
            </a>
          </p>
        </div>
        <div className="top-hero-box">
          <div className="hero-box">
            <div className="box-design">
              <svg
                width={384}
                height={80}
                viewBox="0 0 384 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 23.3333L60 23.3333C62.1887 23.3333 64.356 23.7643 66.3781 24.6019C68.4002 25.4395 70.2375 26.6672 71.7851 28.2148C73.3328 29.7624 74.5604 31.5998 75.398 33.6219C76.2356 35.644 76.6667 37.8112 76.6667 39.9999C76.6667 42.1886 76.2356 44.3559 75.398 46.378C74.5604 48.4001 73.3328 50.2374 71.7851 51.785C70.2375 53.3327 68.4002 54.5603 66.3781 55.3979C64.356 56.2355 62.1887 56.6666 60 56.6666H50M30 56.6666H20C17.8113 56.6666 15.644 56.2355 13.6219 55.3979C11.5998 54.5603 9.76253 53.3327 8.21488 51.785C5.08928 48.6594 3.33333 44.4202 3.33333 39.9999C3.33333 35.5796 5.08928 31.3404 8.21488 28.2148C11.3405 25.0892 15.5797 23.3333 20 23.3333H30"
                  stroke="#141414"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.6667 40H53.3333"
                  stroke="#141414"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M122 23.3333L132 23.3333C134.189 23.3333 136.356 23.7643 138.378 24.6019C140.4 25.4395 142.237 26.6672 143.785 28.2148C145.333 29.7624 146.56 31.5998 147.398 33.6219C148.236 35.644 148.667 37.8112 148.667 39.9999C148.667 42.1886 148.236 44.3559 147.398 46.378C146.56 48.4001 145.333 50.2374 143.785 51.785C142.237 53.3327 140.4 54.5603 138.378 55.3979C136.356 56.2355 134.189 56.6666 132 56.6666H122M102 56.6666H92C89.8113 56.6666 87.644 56.2355 85.6219 55.3979C83.5998 54.5603 81.7625 53.3327 80.2149 51.785C77.0893 48.6594 75.3333 44.4202 75.3333 39.9999C75.3333 35.5796 77.0893 31.3404 80.2149 28.2148C83.3405 25.0892 87.5797 23.3333 92 23.3333H102"
                  stroke="#141414"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M98.6667 40H125.333"
                  stroke="#141414"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M194 23.3333L204 23.3333C206.189 23.3333 208.356 23.7643 210.378 24.6019C212.4 25.4395 214.237 26.6672 215.785 28.2148C217.333 29.7624 218.56 31.5998 219.398 33.6219C220.236 35.644 220.667 37.8112 220.667 39.9999C220.667 42.1886 220.236 44.3559 219.398 46.378C218.56 48.4001 217.333 50.2374 215.785 51.785C214.237 53.3327 212.4 54.5603 210.378 55.3979C208.356 56.2355 206.189 56.6666 204 56.6666H194M174 56.6666H164C161.811 56.6666 159.644 56.2355 157.622 55.3979C155.6 54.5603 153.763 53.3327 152.215 51.785C149.089 48.6594 147.333 44.4202 147.333 39.9999C147.333 35.5796 149.089 31.3404 152.215 28.2148C155.34 25.0892 159.58 23.3333 164 23.3333H174"
                  stroke="#141414"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M170.667 40H197.333"
                  stroke="#141414"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M244 39C243.448 39 243 39.4477 243 40C243 40.5523 243.448 41 244 41V39ZM284 40L274 34.2265V45.7735L284 40ZM244 41H275V39H244V41Z"
                  fill="#005AE2"
                />
                <path
                  d="M354 23.3333L364 23.3333C366.189 23.3333 368.356 23.7643 370.378 24.6019C372.4 25.4395 374.237 26.6672 375.785 28.2148C377.333 29.7624 378.56 31.5998 379.398 33.6219C380.236 35.644 380.667 37.8112 380.667 39.9999C380.667 42.1886 380.236 44.3559 379.398 46.378C378.56 48.4001 377.333 50.2374 375.785 51.785C374.237 53.3327 372.4 54.5603 370.378 55.3979C368.356 56.2355 366.189 56.6666 364 56.6666H354M334 56.6666H324C321.811 56.6666 319.644 56.2355 317.622 55.3979C315.6 54.5603 313.763 53.3327 312.215 51.785C309.089 48.6594 307.333 44.4202 307.333 39.9999C307.333 35.5796 309.089 31.3404 312.215 28.2148C315.34 25.0892 319.58 23.3333 324 23.3333H334"
                  stroke="#141414"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M330.667 40H357.333"
                  stroke="#141414"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p>
              Seamlessly transform your long URLs into concise <br />
              and shareable links with just few clicks.
            </p>
          </div>
          <svg
            className="svg-img"
            width={247}
            height={258}
            viewBox="0 0 247 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M86.6771 41.1107C135.228 -63.1745 174.407 59.5845 198.623 107.021C233.043 174.448 318.301 234.6 115.971 255.011C-86.3584 275.422 25.9891 171.467 86.6771 41.1107Z"
              fill="#E2E9F0"
            />
          </svg>
        </div>
        <div className="top-hero-tray">
          <svg
            width={1440}
            height={93}
            viewBox="0 0 1440 93"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M201.516 9.70664C217.021 3.29808 233.634 0 250.411 0H1186.9C1203.48 0 1219.89 3.21974 1235.24 9.48037L1440 93H0L201.516 9.70664Z"
              fill="#F8F7F7"
            />
            <g filter="url(#filter0_d_1_136)">
              <ellipse
                cx={734}
                cy="44.5"
                rx={478}
                ry="24.5"
                fill="url(#paint0_linear_1_136)"
                fillOpacity="0.7"
                shapeRendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1_136"
                x={252}
                y={20}
                width={964}
                height={57}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={2} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0705882 0 0 0 0 0.141176 0 0 0 0 0.34902 0 0 0 0.35 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_136"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_136"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1_136"
                x1={734}
                y1={20}
                x2={734}
                y2={69}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.106755" stopColor="#E2E9F0" />
                <stop offset="0.440102" stopColor="#DCE4EB" />
                <stop offset={1} stopColor="#E2E9F0" stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="disk">
        <div className="Features-info">
          <p>
            One Stop.
            <br />
            Four <span>Possibilities.</span>
          </p>
        </div>
        <div>
          <ul className="Features-tab">
            <li>
              <h4>3M</h4>
              <p>Active users</p>
            </li>
            <li>
              <h4>60M</h4>
              <p>
                Links &amp; QR
                <br />
                codes created
              </p>
            </li>
            <li>
              <h4>1B</h4>
              <p>App Integration</p>
            </li>
            <li>
              <h4>300k</h4>
              <p>App Integrations</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="background">
        <div>
          <ul className="article-body">
            <li>
              <h3>
                Why choose <span>Scissor</span>
              </h3>
              <p>
                Scissors is the hub of everything that has to do
                <br />
                with your link management. We shorten your URLs,
                <br />
                allow you creating custom ones for your personal,
                <br />
                business, event usage. Our swift QR code
                <br />
                creation, management and usage tracking with
                <br />
                advance analytics for all of these is second to
                <br />
                none.
              </p>
            </li>
            <li>
              <div className="article-body-row">
                <div>
                  <svg
                    width={57}
                    height={56}
                    viewBox="0 0 57 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_202)">
                      <path
                        d="M31.1 23H34.1C34.7566 23 35.4068 23.1293 36.0134 23.3806C36.6201 23.6319 37.1712 24.0002 37.6355 24.4645C38.0998 24.9288 38.4681 25.48 38.7194 26.0866C38.9707 26.6932 39.1 27.3434 39.1 28C39.1 28.6566 38.9707 29.3068 38.7194 29.9134C38.4681 30.52 38.0998 31.0712 37.6355 31.5355C37.1712 31.9998 36.6201 32.3681 36.0134 32.6194C35.4068 32.8707 34.7566 33 34.1 33H31.1M25.1 33H22.1C21.4434 33 20.7932 32.8707 20.1866 32.6194C19.58 32.3681 19.0288 31.9998 18.5645 31.5355C17.6268 30.5979 17.1 29.3261 17.1 28C17.1 26.6739 17.6268 25.4021 18.5645 24.4645C19.5022 23.5268 20.7739 23 22.1 23H25.1"
                        stroke="#141414"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M24.1 28H32.1"
                        stroke="#005AE2"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <circle
                      cx="28.1"
                      cy={28}
                      r={28}
                      fill="#3284FF"
                      fillOpacity="0.13"
                    />
                    <defs>
                      <clipPath id="clip0_1_202">
                        <rect
                          width={24}
                          height={24}
                          fill="white"
                          transform="translate(16.1 16)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h2>URL Shortening</h2>
                  <p>
                    Scissor allows you to shorten URLs of your
                    <br />
                    business, events. Shorten your URL at scale,
                    <br />
                    URL redirects.
                  </p>
                </div>
                <div>
                  <svg
                    width={57}
                    height={56}
                    viewBox="0 0 57 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.1 20H20.1C19.5696 20 19.0609 20.2107 18.6858 20.5858C18.3107 20.9609 18.1 21.4696 18.1 22V36C18.1 36.5304 18.3107 37.0391 18.6858 37.4142C19.0609 37.7893 19.5696 38 20.1 38H34.1C34.6304 38 35.1391 37.7893 35.5142 37.4142C35.8893 37.0391 36.1 36.5304 36.1 36V29"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M34.6 18.5C34.9978 18.1022 35.5374 17.8787 36.1 17.8787C36.6626 17.8787 37.2022 18.1022 37.6 18.5C37.9978 18.8978 38.2213 19.4374 38.2213 20C38.2213 20.5626 37.9978 21.1022 37.6 21.5L28.1 31L24.1 32L25.1 28L34.6 18.5Z"
                      stroke="#005AE2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="28.1"
                      cy={28}
                      r={28}
                      fill="#3284FF"
                      fillOpacity="0.13"
                    />
                  </svg>
                  <h2>Custom URLs</h2>
                  <p>
                    With Scissor, you can create custom URLs,
                    <br />
                    with the length you want! A solution for socials
                    <br />
                    and businesses.
                  </p>
                </div>
              </div>
              <div className="article-body-row">
                <div>
                  <svg
                    width={57}
                    height={56}
                    viewBox="0 0 57 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.8859 19.0676H18.8859V26.0676H25.8859V19.0676Z"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M36.8859 19.0676H29.8859V26.0676H36.8859V19.0676Z"
                      stroke="#005AE2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M36.8859 30.0676H29.8859V37.0676H36.8859V30.0676Z"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.8859 30.0676H18.8859V37.0676H25.8859V30.0676Z"
                      stroke="#005AE2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="28.1"
                      cy={28}
                      r={28}
                      fill="#3284FF"
                      fillOpacity="0.13"
                    />
                  </svg>
                  <h2>QR Codes</h2>
                  <p>
                    Generate QR codes to your business, events.
                    <br />
                    Bring your audience and customers to your
                    <br />
                    doorstep with this scan and go solution.
                  </p>
                </div>
                <div>
                  <svg
                    width={57}
                    height={56}
                    viewBox="0 0 57 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_235)">
                      <path
                        d="M37.1 28H33.1L30.1 37L24.1 19L21.1 28H17.1"
                        stroke="#0065FE"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <circle
                      cx="28.1"
                      cy={28}
                      r={28}
                      fill="#3284FF"
                      fillOpacity="0.13"
                    />
                    <defs>
                      <clipPath id="clip0_1_235">
                        <rect
                          width={24}
                          height={24}
                          fill="white"
                          transform="translate(16.1 16)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h2>Data Analytics</h2>
                  <p>
                    Receive data on the usage of either your
                    <br />
                    shortened URL, custom URLs or generated QR
                    <br />
                    codes. Embedded to monitor progress.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/*price*/}
        <div className="price-info">
          <ul>
            <li>
              <h3>
                A <span>price perfect</span> for your needs.
              </h3>
              <p>
                From catering for your personal, business, event, socials needs,
                you can be
                <br />
                rest assured we have you in mind in our pricing.
              </p>
            </li>
          </ul>
        </div>
        <div className="price-tags">
          <div className="price-tags-box price-tags-box-left">
            <h2>Basic</h2>
            <h1>Free</h1>
            <h5>Free plan for all users</h5>
            <ul>
              <li>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_252)">
                    <path
                      d="M14.6667 7.38668V8.00001C14.6659 9.43763 14.2003 10.8365 13.3396 11.9879C12.4788 13.1393 11.2689 13.9817 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99205 1.34779 7.55755C1.44239 6.12305 1.99815 4.75756 2.9322 3.66473C3.86625 2.57189 5.12853 1.81027 6.5308 1.49344C7.93307 1.17662 9.40019 1.32157 10.7133 1.90668"
                      stroke="#005AE2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6667 2.66666L8 9.33999L6 7.33999"
                      stroke="#005AE2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_252">
                      <rect width={16} height={16} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Unlimited URL Shortening</p>
              </li>
              <li>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_252)">
                    <path
                      d="M14.6667 7.38668V8.00001C14.6659 9.43763 14.2003 10.8365 13.3396 11.9879C12.4788 13.1393 11.2689 13.9817 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99205 1.34779 7.55755C1.44239 6.12305 1.99815 4.75756 2.9322 3.66473C3.86625 2.57189 5.12853 1.81027 6.5308 1.49344C7.93307 1.17662 9.40019 1.32157 10.7133 1.90668"
                      stroke="#005AE2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6667 2.66666L8 9.33999L6 7.33999"
                      stroke="#005AE2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_252">
                      <rect width={16} height={16} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Basic Link Analytics</p>
              </li>
              <li>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_252)">
                    <path
                      d="M14.6667 7.38668V8.00001C14.6659 9.43763 14.2003 10.8365 13.3396 11.9879C12.4788 13.1393 11.2689 13.9817 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99205 1.34779 7.55755C1.44239 6.12305 1.99815 4.75756 2.9322 3.66473C3.86625 2.57189 5.12853 1.81027 6.5308 1.49344C7.93307 1.17662 9.40019 1.32157 10.7133 1.90668"
                      stroke="#005AE2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6667 2.66666L8 9.33999L6 7.33999"
                      stroke="#005AE2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_252">
                      <rect width={16} height={16} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Customizable Short Links</p>
              </li>
              <li>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_252)">
                    <path
                      d="M14.6667 7.38668V8.00001C14.6659 9.43763 14.2003 10.8365 13.3396 11.9879C12.4788 13.1393 11.2689 13.9817 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99205 1.34779 7.55755C1.44239 6.12305 1.99815 4.75756 2.9322 3.66473C3.86625 2.57189 5.12853 1.81027 6.5308 1.49344C7.93307 1.17662 9.40019 1.32157 10.7133 1.90668"
                      stroke="#005AE2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6667 2.66666L8 9.33999L6 7.33999"
                      stroke="#005AE2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_252">
                      <rect width={16} height={16} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Standard Support</p>
              </li>
              <li>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_252)">
                    <path
                      d="M14.6667 7.38668V8.00001C14.6659 9.43763 14.2003 10.8365 13.3396 11.9879C12.4788 13.1393 11.2689 13.9817 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99205 1.34779 7.55755C1.44239 6.12305 1.99815 4.75756 2.9322 3.66473C3.86625 2.57189 5.12853 1.81027 6.5308 1.49344C7.93307 1.17662 9.40019 1.32157 10.7133 1.90668"
                      stroke="#005AE2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6667 2.66666L8 9.33999L6 7.33999"
                      stroke="#005AE2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_252">
                      <rect width={16} height={16} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Ad-supported</p>
              </li>
            </ul>
          </div>
          <div className="price-tags-box price-tags-box-center">
            <h2>Professional</h2>
            <h1>$15/month</h1>
            <h5 className="price-tags-header-2">Ideal for business creators</h5>
            <ul>
              <li>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_252)">
                    <path
                      d="M14.6667 7.38668V8.00001C14.6659 9.43763 14.2003 10.8365 13.3396 11.9879C12.4788 13.1393 11.2689 13.9817 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99205 1.34779 7.55755C1.44239 6.12305 1.99815 4.75756 2.9322 3.66473C3.86625 2.57189 5.12853 1.81027 6.5308 1.49344C7.93307 1.17662 9.40019 1.32157 10.7133 1.90668"
                      stroke="#ffffff"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6667 2.66666L8 9.33999L6 7.33999"
                      stroke="#ffffff"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_252">
                      <rect width={16} height={16} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Enhanced Link Analytics</p>
              </li>
              <li>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_252)">
                    <path
                      d="M14.6667 7.38668V8.00001C14.6659 9.43763 14.2003 10.8365 13.3396 11.9879C12.4788 13.1393 11.2689 13.9817 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99205 1.34779 7.55755C1.44239 6.12305 1.99815 4.75756 2.9322 3.66473C3.86625 2.57189 5.12853 1.81027 6.5308 1.49344C7.93307 1.17662 9.40019 1.32157 10.7133 1.90668"
                      stroke="#ffffff"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6667 2.66666L8 9.33999L6 7.33999"
                      stroke="#ffffff"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_252">
                      <rect width={16} height={16} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Custom Branded Domains</p>
              </li>
              <li>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_252)">
                    <path
                      d="M14.6667 7.38668V8.00001C14.6659 9.43763 14.2003 10.8365 13.3396 11.9879C12.4788 13.1393 11.2689 13.9817 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99205 1.34779 7.55755C1.44239 6.12305 1.99815 4.75756 2.9322 3.66473C3.86625 2.57189 5.12853 1.81027 6.5308 1.49344C7.93307 1.17662 9.40019 1.32157 10.7133 1.90668"
                      stroke="#ffffff"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6667 2.66666L8 9.33999L6 7.33999"
                      stroke="#ffffff"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_252">
                      <rect width={16} height={16} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Advanced Link Customization</p>
              </li>
              <li>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_252)">
                    <path
                      d="M14.6667 7.38668V8.00001C14.6659 9.43763 14.2003 10.8365 13.3396 11.9879C12.4788 13.1393 11.2689 13.9817 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99205 1.34779 7.55755C1.44239 6.12305 1.99815 4.75756 2.9322 3.66473C3.86625 2.57189 5.12853 1.81027 6.5308 1.49344C7.93307 1.17662 9.40019 1.32157 10.7133 1.90668"
                      stroke="#ffffff"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6667 2.66666L8 9.33999L6 7.33999"
                      stroke="#ffffff"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_252">
                      <rect width={16} height={16} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Priority Support</p>
              </li>
              <li>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_252)">
                    <path
                      d="M14.6667 7.38668V8.00001C14.6659 9.43763 14.2003 10.8365 13.3396 11.9879C12.4788 13.1393 11.2689 13.9817 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99205 1.34779 7.55755C1.44239 6.12305 1.99815 4.75756 2.9322 3.66473C3.86625 2.57189 5.12853 1.81027 6.5308 1.49344C7.93307 1.17662 9.40019 1.32157 10.7133 1.90668"
                      stroke="#ffffff"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6667 2.66666L8 9.33999L6 7.33999"
                      stroke="#ffffff"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_252">
                      <rect width={16} height={16} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Ad-free Experience</p>
              </li>
            </ul>
          </div>
          <div className="price-tags-box price-tags-box-right">
            <h2>Teams</h2>
            <h1>$25/month</h1>
            <h5>Share with up to 10 users</h5>
            <ul>
              <li>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_252)">
                    <path
                      d="M14.6667 7.38668V8.00001C14.6659 9.43763 14.2003 10.8365 13.3396 11.9879C12.4788 13.1393 11.2689 13.9817 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99205 1.34779 7.55755C1.44239 6.12305 1.99815 4.75756 2.9322 3.66473C3.86625 2.57189 5.12853 1.81027 6.5308 1.49344C7.93307 1.17662 9.40019 1.32157 10.7133 1.90668"
                      stroke="#005AE2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6667 2.66666L8 9.33999L6 7.33999"
                      stroke="#005AE2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_252">
                      <rect width={16} height={16} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Team Collaboration</p>
              </li>
              <li>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_252)">
                    <path
                      d="M14.6667 7.38668V8.00001C14.6659 9.43763 14.2003 10.8365 13.3396 11.9879C12.4788 13.1393 11.2689 13.9817 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99205 1.34779 7.55755C1.44239 6.12305 1.99815 4.75756 2.9322 3.66473C3.86625 2.57189 5.12853 1.81027 6.5308 1.49344C7.93307 1.17662 9.40019 1.32157 10.7133 1.90668"
                      stroke="#005AE2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6667 2.66666L8 9.33999L6 7.33999"
                      stroke="#005AE2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_252">
                      <rect width={16} height={16} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>User Roles and Permissions</p>
              </li>
              <li>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_252)">
                    <path
                      d="M14.6667 7.38668V8.00001C14.6659 9.43763 14.2003 10.8365 13.3396 11.9879C12.4788 13.1393 11.2689 13.9817 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99205 1.34779 7.55755C1.44239 6.12305 1.99815 4.75756 2.9322 3.66473C3.86625 2.57189 5.12853 1.81027 6.5308 1.49344C7.93307 1.17662 9.40019 1.32157 10.7133 1.90668"
                      stroke="#005AE2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6667 2.66666L8 9.33999L6 7.33999"
                      stroke="#005AE2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_252">
                      <rect width={16} height={16} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Enhanced Security</p>
              </li>
              <li>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_252)">
                    <path
                      d="M14.6667 7.38668V8.00001C14.6659 9.43763 14.2003 10.8365 13.3396 11.9879C12.4788 13.1393 11.2689 13.9817 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99205 1.34779 7.55755C1.44239 6.12305 1.99815 4.75756 2.9322 3.66473C3.86625 2.57189 5.12853 1.81027 6.5308 1.49344C7.93307 1.17662 9.40019 1.32157 10.7133 1.90668"
                      stroke="#005AE2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6667 2.66666L8 9.33999L6 7.33999"
                      stroke="#005AE2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_252">
                      <rect width={16} height={16} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>API Access</p>
              </li>
              <li>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_252)">
                    <path
                      d="M14.6667 7.38668V8.00001C14.6659 9.43763 14.2003 10.8365 13.3396 11.9879C12.4788 13.1393 11.2689 13.9817 9.89025 14.3893C8.51163 14.7969 7.03818 14.7479 5.68966 14.2497C4.34113 13.7515 3.18978 12.8307 2.40732 11.6247C1.62485 10.4187 1.2532 8.99205 1.34779 7.55755C1.44239 6.12305 1.99815 4.75756 2.9322 3.66473C3.86625 2.57189 5.12853 1.81027 6.5308 1.49344C7.93307 1.17662 9.40019 1.32157 10.7133 1.90668"
                      stroke="#005AE2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6667 2.66666L8 9.33999L6 7.33999"
                      stroke="#005AE2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_252">
                      <rect width={16} height={16} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Dedicated Account Manager</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="price-button-holder">
          <button className="price-button1">Get Custom Pricing</button>
          <button className="price-button">Select Pricing</button>
        </div>
      </div>
      <div className="form-background">
        <form className="form">
          <input type="text" placeholder="Paste URL here..." />
          <div className="form-row">
            <select>
              <option>Choose Domain</option>
              <option>Choose game</option>
              <option>Choose location</option>
            </select>
            <input type="text" placeholder="Type Alias here" />
          </div>
          <button className="form-button">
            Trim URL
            <div>
              <svg
                width={25}
                height={25}
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.45883 8.31606C9.43987 8.54147 9.11187 8.59847 9.00637 8.39468L8.4383 7.29755C8.40156 7.22646 8.3267 7.17895 8.24205 7.1728L6.9348 7.07797C6.69196 7.06037 6.63057 6.75589 6.85011 6.65794L8.03191 6.13061C8.10844 6.09645 8.15973 6.02703 8.16628 5.94842L8.26845 4.73482C8.28741 4.50941 8.61541 4.45241 8.7209 4.6562L9.28897 5.75334C9.32571 5.82443 9.40048 5.87195 9.48523 5.87808L10.7925 5.97291C11.0353 5.99051 11.0967 6.29499 10.8772 6.39294L9.69536 6.92027C9.61874 6.95445 9.56755 7.02385 9.56099 7.10247L9.45883 8.31606Z"
                  fill="white"
                />
                <path
                  d="M5.70599 9.1442C5.67434 9.25336 5.50749 9.25336 5.47583 9.1442L5.30536 8.55649C5.29435 8.51841 5.26227 8.48867 5.22127 8.47842L4.58821 8.32018C4.4706 8.29079 4.4706 8.13591 4.58821 8.10652L5.22127 7.94828C5.26227 7.93802 5.29435 7.90828 5.30536 7.87021L5.47583 7.28249C5.50749 7.17333 5.67434 7.17333 5.70599 7.28249L5.87646 7.87021C5.88747 7.90828 5.91951 7.93802 5.96055 7.94828L6.59362 8.10652C6.71122 8.13591 6.71122 8.29079 6.59362 8.32018L5.96055 8.47842C5.91951 8.48867 5.88747 8.51841 5.87646 8.55649L5.70599 9.1442Z"
                  fill="white"
                />
                <path
                  d="M7.88781 12.5199C7.85615 12.6291 7.68931 12.6291 7.65765 12.5199L7.48718 11.9322C7.47617 11.8941 7.44409 11.8644 7.40309 11.8541L6.77002 11.6959C6.65242 11.6665 6.65242 11.5116 6.77002 11.4822L7.40309 11.324C7.44409 11.3138 7.47617 11.284 7.48718 11.2459L7.65765 10.6582C7.68931 10.5491 7.85615 10.5491 7.88781 10.6582L8.05828 11.2459C8.06929 11.284 8.10132 11.3138 8.14237 11.324L8.77544 11.4822C8.89304 11.5116 8.89304 11.6665 8.77544 11.6959L8.14237 11.8541C8.10132 11.8644 8.06929 11.8941 8.05828 11.9322L7.88781 12.5199Z"
                  fill="white"
                />
                <path
                  d="M6.03127 11.1969C6.01016 11.2697 5.89893 11.2697 5.87783 11.1969L5.76418 10.8051C5.75684 10.7797 5.73545 10.7599 5.70812 10.7531L5.28608 10.6476C5.20767 10.628 5.20767 10.5247 5.28608 10.5052L5.70812 10.3997C5.73545 10.3928 5.75684 10.373 5.76418 10.3476L5.87783 9.9558C5.89893 9.88303 6.01016 9.88303 6.03127 9.9558L6.14491 10.3476C6.15225 10.373 6.17361 10.3928 6.20097 10.3997L6.62302 10.5052C6.70142 10.5247 6.70142 10.628 6.62302 10.6476L6.20097 10.7531C6.17361 10.7599 6.15225 10.7797 6.14491 10.8051L6.03127 11.1969Z"
                  fill="white"
                />
                <path
                  d="M11.1222 9.84666C11.1011 9.91944 10.9898 9.91944 10.9687 9.84666L10.8551 9.45485C10.8478 9.42947 10.8264 9.40964 10.799 9.40281L10.377 9.29731C10.2986 9.27772 10.2986 9.17447 10.377 9.15487L10.799 9.04938C10.8264 9.04254 10.8478 9.02272 10.8551 8.99733L10.9687 8.60552C10.9898 8.53275 11.1011 8.53275 11.1222 8.60552L11.2358 8.99733C11.2432 9.02272 11.2645 9.04254 11.2919 9.04938L11.7139 9.15487C11.7923 9.17447 11.7923 9.27772 11.7139 9.29731L11.2919 9.40281C11.2645 9.40964 11.2432 9.42947 11.2358 9.45485L11.1222 9.84666Z"
                  fill="white"
                />
                <path
                  d="M18.3182 18.003L17.5909 18.6782M8.15778 9.04228L19.9624 19.0877C20.2555 19.3371 20.2654 19.7629 19.9843 20.0239V20.0239C19.7043 20.2839 19.2496 20.2777 18.9805 20.008C14.9047 15.9231 7.72842 8.70747 8.15778 9.04228Z"
                  stroke="white"
                />
              </svg>
            </div>
          </button>
          <p>
            By clicking TrimURL, I agree to the Terms of Service,
            <br />
            Privacy Policy and Use of Cookies.
          </p>
        </form>
      </div>
      <div className="FAQ-container">
        <div className="FAQs">
          <div>
            <h2>
              <span>
                <svg
                  width={6}
                  height={35}
                  viewBox="0 0 6 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.95001 0V48"
                    stroke="url(#paint0_linear_1_364)"
                    strokeWidth={5}
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_364"
                      x1="3.00001"
                      y1={0}
                      x2="3.00001"
                      y2={48}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#112232" />
                      <stop offset={1} stopColor="#4D6B88" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              FAQs
            </h2>
          </div>
          <div>
            <ul>
              <li className="FAQ-list FAQ-list-open">
                <div>
                  <p>How does URL shortening work?</p>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19"
                      stroke="#141414"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p id="faq-small-text">
                  URL shortening works by taking a long URL and creating a
                  shorter, condensed version that redirects to the original URL.
                  When a user clicks on the shortened link, they are redirected to
                  the intended destination.
                </p>
              </li>
              <li className="FAQ-list">
                <p>
                  Is it necessary to create an account to use the URL shortening
                  service?
                </p>
                <div>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5V19"
                      stroke="#141414"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 12H19"
                      stroke="#141414"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </li>
              <li className="FAQ-list">
                <p>Are the shortened links permanent? Will they expire?</p>
                <div>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5V19"
                      stroke="#141414"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 12H19"
                      stroke="#141414"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </li>
              <li className="FAQ-list">
                <p>
                  Are there any limitations on the number of URLs I can shorten?
                </p>
                <div>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5V19"
                      stroke="#141414"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 12H19"
                      stroke="#141414"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </li>
              <li className="FAQ-list">
                <p>
                  Can I customize the shortened URLs to reflect my brand or
                  content?
                </p>
                <div>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5V19"
                      stroke="#141414"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 12H19"
                      stroke="#141414"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </li>
              <li className="FAQ-list">
                <p>Can I track the performance of my shortened URLs?</p>
                <div>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5V19"
                      stroke="#141414"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 12H19"
                      stroke="#141414"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </li>
              <li className="FAQ-list">
                <p>
                  How secure is the URL shortening service? Are the shortened
                  links protected
                  <br />
                  against spam or malicious activity?
                </p>
                <div>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5V19"
                      stroke="#141414"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 12H19"
                      stroke="#141414"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </li>
              <li className="FAQ-list">
                <p>What is a QR code and what can it do?</p>
                <div>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5V19"
                      stroke="#141414"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 12H19"
                      stroke="#141414"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </li>
              <li className="FAQ-list">
                <p>
                  Is there an API available for integrating the URL shortening
                  service into my own
                  <br />
                  applications or websites?
                </p>
                <div>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5V19"
                      stroke="#141414"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 12H19"
                      stroke="#141414"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="revolution">
        <h1>Revolutionizing Link Optimization</h1>
        <button>Get Started</button>
      </div>
      <div className="footer-bg">
        <div className="footer">
          <div>
            <svg
              width={184}
              height={96}
              viewBox="0 0 184 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.5606 8.43938C30.9748 7.85354 30.0167 7.85354 29.4308 8.43938L26.3778 11.4948C25.1269 10.6627 23.6915 10.2497 22.25 10.2497C20.331 10.2497 18.3872 10.9822 16.9472 12.4469L12.4472 16.9472C9.88083 19.5106 9.56451 23.4747 11.4922 26.384L8.43938 29.4394C7.85354 30.0253 7.85354 30.9745 8.43938 31.5606C8.73242 31.8536 9.11619 32 9.49995 32C9.88395 32 10.2675 31.8536 10.5605 31.5606L13.6133 28.5051C14.8645 29.3372 16.3085 29.7502 17.75 29.7502C19.6441 29.7502 21.5878 29.0178 23.0528 27.553L27.5442 23.053C30.1105 20.4893 30.4269 16.5252 28.4989 13.616L31.5606 10.5605C32.1465 9.97466 32.1465 9.02522 31.5606 8.43938ZM26.7412 17.75C26.7412 18.9512 26.2724 20.082 25.4231 20.9317L20.9317 25.4317C20.0792 26.2813 18.9265 26.75 17.75 26.75C17.0703 26.75 16.4199 26.5832 15.8223 26.2988L18.0358 24.0605C18.6217 23.4747 18.6217 22.5255 18.0358 21.9394C17.4747 21.3536 16.5255 21.3536 15.9397 21.9394L13.7014 24.1777C13.4144 23.5829 13.2502 22.9325 13.2502 22.25C13.2502 21.0488 13.7189 19.9179 14.5685 19.0683L19.0436 14.5683C19.8932 13.7187 21.0488 13.25 22.25 13.25C22.9297 13.25 23.577 13.4168 24.1748 13.7012L21.8926 15.9862C21.3068 16.572 21.3068 17.5212 21.8926 18.1073C22.1857 18.4004 22.5692 18.5468 22.9532 18.5468C23.3341 18.5468 23.7179 18.4004 24.0107 18.1073L26.2902 15.8223C26.577 16.4168 26.7412 17.0674 26.7412 17.75Z"
                fill="#001F3F"
              />
              <path
                d="M40 8V32"
                stroke="#141414"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                d="M55.296 27.336C51.96 27.336 49.632 25.752 48.696 23.184L51.528 21.528C52.176 23.232 53.472 24.096 55.392 24.096C57.24 24.096 58.08 23.352 58.08 22.32C58.08 21.72 57.816 21.264 57.288 20.952C56.76 20.616 55.824 20.256 54.456 19.872C52.944 19.416 52.032 19.056 50.976 18.312C49.944 17.544 49.392 16.392 49.392 14.856C49.392 13.344 49.92 12.12 51 11.232C52.08 10.32 53.4 9.864 54.912 9.864C57.624 9.864 59.76 11.256 60.912 13.632L58.128 15.24C57.456 13.8 56.376 13.08 54.912 13.08C53.544 13.08 52.704 13.776 52.704 14.76C52.704 15.288 52.92 15.72 53.352 16.056C53.808 16.368 54.648 16.728 55.896 17.112L57.048 17.496C57.312 17.568 57.672 17.712 58.128 17.904C58.584 18.072 58.944 18.24 59.184 18.408C59.688 18.72 60.456 19.32 60.768 19.896C61.128 20.472 61.392 21.312 61.392 22.272C61.392 23.832 60.816 25.056 59.688 25.968C58.56 26.88 57.096 27.336 55.296 27.336ZM71.403 27.336C68.883 27.336 66.795 26.496 65.139 24.816C63.483 23.136 62.667 21.072 62.667 18.6C62.667 16.128 63.483 14.04 65.139 12.384C66.795 10.704 68.883 9.864 71.403 9.864C74.451 9.864 77.187 11.4 78.627 13.824L75.771 15.48C74.931 13.968 73.323 13.08 71.403 13.08C69.771 13.08 68.451 13.584 67.443 14.616C66.459 15.648 65.955 16.968 65.955 18.6C65.955 20.208 66.459 21.528 67.443 22.56C68.451 23.592 69.771 24.096 71.403 24.096C73.323 24.096 74.979 23.184 75.771 21.72L78.627 23.376C77.187 25.8 74.475 27.336 71.403 27.336ZM80.6616 27V10.2H83.9736V27H80.6616ZM92.5616 27.336C89.2256 27.336 86.8976 25.752 85.9616 23.184L88.7936 21.528C89.4416 23.232 90.7376 24.096 92.6576 24.096C94.5056 24.096 95.3456 23.352 95.3456 22.32C95.3456 21.72 95.0816 21.264 94.5536 20.952C94.0256 20.616 93.0896 20.256 91.7216 19.872C90.2096 19.416 89.2976 19.056 88.2416 18.312C87.2096 17.544 86.6576 16.392 86.6576 14.856C86.6576 13.344 87.1856 12.12 88.2656 11.232C89.3456 10.32 90.6656 9.864 92.1776 9.864C94.8896 9.864 97.0256 11.256 98.1776 13.632L95.3936 15.24C94.7216 13.8 93.6416 13.08 92.1776 13.08C90.8096 13.08 89.9696 13.776 89.9696 14.76C89.9696 15.288 90.1856 15.72 90.6176 16.056C91.0736 16.368 91.9136 16.728 93.1616 17.112L94.3136 17.496C94.5776 17.568 94.9376 17.712 95.3936 17.904C95.8496 18.072 96.2096 18.24 96.4496 18.408C96.9536 18.72 97.7216 19.32 98.0336 19.896C98.3936 20.472 98.6576 21.312 98.6576 22.272C98.6576 23.832 98.0816 25.056 96.9536 25.968C95.8256 26.88 94.3616 27.336 92.5616 27.336ZM106.038 27.336C102.702 27.336 100.374 25.752 99.4382 23.184L102.27 21.528C102.918 23.232 104.214 24.096 106.134 24.096C107.982 24.096 108.822 23.352 108.822 22.32C108.822 21.72 108.558 21.264 108.03 20.952C107.502 20.616 106.566 20.256 105.198 19.872C103.686 19.416 102.774 19.056 101.718 18.312C100.686 17.544 100.134 16.392 100.134 14.856C100.134 13.344 100.662 12.12 101.742 11.232C102.822 10.32 104.142 9.864 105.654 9.864C108.366 9.864 110.502 11.256 111.654 13.632L108.87 15.24C108.198 13.8 107.118 13.08 105.654 13.08C104.286 13.08 103.446 13.776 103.446 14.76C103.446 15.288 103.662 15.72 104.094 16.056C104.55 16.368 105.39 16.728 106.638 17.112L107.79 17.496C108.054 17.568 108.414 17.712 108.87 17.904C109.326 18.072 109.686 18.24 109.926 18.408C110.43 18.72 111.198 19.32 111.51 19.896C111.87 20.472 112.134 21.312 112.134 22.272C112.134 23.832 111.558 25.056 110.43 25.968C109.302 26.88 107.838 27.336 106.038 27.336ZM128.313 24.816C126.609 26.496 124.545 27.336 122.121 27.336C119.697 27.336 117.633 26.496 115.929 24.816C114.249 23.112 113.409 21.048 113.409 18.6C113.409 16.152 114.249 14.088 115.929 12.408C117.633 10.704 119.697 9.864 122.121 9.864C124.545 9.864 126.609 10.704 128.313 12.408C130.017 14.088 130.857 16.152 130.857 18.6C130.857 21.048 130.017 23.112 128.313 24.816ZM118.257 22.56C119.289 23.592 120.585 24.096 122.121 24.096C123.657 24.096 124.953 23.592 125.985 22.56C127.017 21.528 127.545 20.208 127.545 18.6C127.545 16.992 127.017 15.672 125.985 14.64C124.953 13.608 123.657 13.08 122.121 13.08C120.585 13.08 119.289 13.608 118.257 14.64C117.225 15.672 116.697 16.992 116.697 18.6C116.697 20.208 117.225 21.528 118.257 22.56ZM145.977 27H142.401L139.017 21.168H136.497V27H133.185V10.2H139.905C141.465 10.2 142.785 10.752 143.865 11.832C144.945 12.912 145.497 14.232 145.497 15.768C145.497 17.856 144.201 19.776 142.257 20.664L145.977 27ZM139.905 13.296H136.497V18.264H139.905C141.153 18.264 142.185 17.136 142.185 15.768C142.185 14.4 141.153 13.296 139.905 13.296Z"
                fill="#141414"
              />
              <path
                d="M31.0859 77.4766C30.3437 78.5312 29.5625 79.3516 28.7422 79.9375V80.5234C28.7422 83.9609 27.5215 87.0664 25.0801 89.8398C22.6387 92.6133 19.3672 94 15.2656 94C12.6094 94 10.1875 93.2969 8 91.8906C8.23438 91.9297 8.60547 91.9492 9.11328 91.9492C11.3008 91.9492 13.2734 91.2656 15.0312 89.8984C14.0156 89.8594 13.0977 89.5371 12.2773 88.9316C11.457 88.3262 10.8906 87.5547 10.5781 86.6172C10.9687 86.6953 11.2617 86.7344 11.457 86.7344C11.8867 86.7344 12.3164 86.6758 12.7461 86.5586C11.6523 86.3633 10.7441 85.8262 10.0215 84.9473C9.29883 84.0684 8.9375 83.0625 8.9375 81.9297V81.8125C9.71875 82.2422 10.4219 82.457 11.0469 82.457C9.67969 81.5195 8.99609 80.1914 8.99609 78.4727C8.99609 77.5742 9.19141 76.793 9.58203 76.1289C12.1211 79.2148 15.3828 80.8555 19.3672 81.0508C19.2891 80.582 19.25 80.2305 19.25 79.9961C19.25 78.668 19.709 77.5449 20.627 76.627C21.5449 75.709 22.668 75.25 23.9961 75.25C25.4023 75.25 26.5547 75.7383 27.4531 76.7148C28.5469 76.4805 29.543 76.1094 30.4414 75.6016C30.0898 76.7344 29.4063 77.5938 28.3906 78.1797C29.2891 78.0625 30.1875 77.8281 31.0859 77.4766Z"
                fill="#141414"
              />
              <path
                d="M73 74H63C60.2386 74 58 76.2386 58 79V89C58 91.7614 60.2386 94 63 94H73C75.7614 94 78 91.7614 78 89V79C78 76.2386 75.7614 74 73 74Z"
                stroke="#141414"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M72 83.3701C72.1234 84.2023 71.9813 85.0523 71.5938 85.7991C71.2063 86.5459 70.5932 87.1515 69.8416 87.5297C69.0901 87.908 68.2385 88.0397 67.4078 87.906C66.5771 87.7723 65.8098 87.3801 65.2149 86.7852C64.6199 86.1903 64.2277 85.4229 64.0941 84.5923C63.9604 83.7616 64.0921 82.91 64.4703 82.1584C64.8486 81.4069 65.4542 80.7938 66.201 80.4063C66.9478 80.0188 67.7978 79.8766 68.63 80.0001C69.4789 80.1259 70.2649 80.5215 70.8717 81.1284C71.4785 81.7352 71.8741 82.5211 72 83.3701Z"
                stroke="#141414"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M124.7 73.4375C125.13 73.4375 125.511 73.584 125.843 73.877C126.175 74.1699 126.341 74.5312 126.341 74.9609V93.4766C126.341 93.9063 126.175 94.2676 125.843 94.5605C125.511 94.8535 125.13 95 124.7 95H106.302C105.872 95 105.501 94.8535 105.189 94.5605C104.876 94.2676 104.72 93.9063 104.72 93.4766V74.9609C104.72 74.5312 104.876 74.1699 105.189 73.877C105.501 73.584 105.872 73.4375 106.302 73.4375H124.7ZM111.107 91.8359V81.5234H107.943V91.8359H111.107ZM109.525 80.1172C110.033 80.1172 110.472 79.9316 110.843 79.5605C111.214 79.1895 111.4 78.75 111.4 78.2422C111.4 77.7344 111.214 77.2949 110.843 76.9238C110.472 76.5527 110.033 76.3672 109.525 76.3672C109.017 76.3672 108.577 76.5527 108.206 76.9238C107.835 77.2949 107.65 77.7344 107.65 78.2422C107.65 78.7891 107.825 79.2383 108.177 79.5898C108.529 79.9414 108.978 80.1172 109.525 80.1172ZM123.118 91.8359V86.1523C123.118 84.5898 122.855 83.3887 122.327 82.5488C121.8 81.709 120.794 81.2891 119.31 81.2891C117.825 81.2891 116.81 81.8359 116.263 82.9297H116.204V81.5234H113.158V91.8359H116.322V86.7383C116.322 84.9805 116.966 84.1016 118.255 84.1016C118.763 84.1016 119.144 84.2676 119.398 84.5996C119.652 84.9316 119.798 85.2441 119.837 85.5371C119.876 85.8301 119.896 86.25 119.896 86.7969V91.8359H123.118Z"
                fill="#141414"
              />
              <path
                d="M173.971 73.4375C174.283 73.4375 174.566 73.5547 174.82 73.7891C175.074 74.0234 175.201 74.2969 175.201 74.6094V93.8281C175.201 94.1406 175.074 94.4141 174.82 94.6484C174.566 94.8828 174.283 95 173.971 95H168.463V86.6797H171.275L171.685 83.3984H168.463V81.2891C168.463 80.2344 169.01 79.707 170.103 79.707H171.803V76.8359C171.217 76.7188 170.377 76.6602 169.283 76.6602C168.033 76.6602 167.027 77.041 166.266 77.8027C165.504 78.5645 165.123 79.6289 165.123 80.9961V83.3984H162.31V86.6797H165.123V95H154.752C154.439 95 154.166 94.8828 153.932 94.6484C153.697 94.4141 153.58 94.1406 153.58 93.8281V74.6094C153.58 74.2969 153.697 74.0234 153.932 73.7891C154.166 73.5547 154.439 73.4375 154.752 73.4375H173.971Z"
                fill="#141414"
              />
            </svg>
          </div>
          <div className="footer-info">
            <div className="article-body footer-article-body">
              <ul>
                <li>
                  <h4>Why Scissor ?</h4>
                  <p>
                    Scissor 101
                    <br />
                    Integrations &amp; API
                    <br />
                    Pricing
                  </p>
                </li>
                <li>
                  <h4>Solutions</h4>
                  <p>
                    Social Media
                    <br />
                    Digital Marketing
                    <br />
                    Customer Service
                    <br />
                    For Developers
                  </p>
                </li>
                <li>
                  <h4>Products</h4>
                  <p>
                    Link Management
                    <br />
                    QR Codes
                    <br />
                    Link-in-bio
                  </p>
                </li>
                <li>
                  <h4>Company</h4>
                  <p>
                    About
                    <br />
                    Scissor
                    <br />
                    Careers
                    <br />
                    Partners
                    <br />
                    Press
                    <br />
                    Contact
                    <br />
                    Reviews
                  </p>
                </li>
              </ul>
            </div>
            <div className="article-body footer-article-body">
              <ul>
                <li>
                  <h4>Resources</h4>
                  <p>
                    Blog
                    <br />
                    Resource Library
                    <br />
                    Developers
                    <br />
                    App Connectors
                    <br />
                    Support
                    <br />
                    Trust Center
                    <br />
                    Browser Extension
                    <br />
                    Mobile App
                  </p>
                </li>
                <li>
                  <h4>Features</h4>
                  <p>
                    Branded Links
                    <br />
                    Mobile Links
                    <br />
                    Campaign
                    <br />
                    Management &amp;
                    <br />
                    Analytics
                    <br />
                    QR Code generation
                  </p>
                </li>
                <li>
                  <h4>Legal</h4>
                  <p>
                    Privacy Policy
                    <br />
                    Cookie Policy
                    <br />
                    Terms of Service
                    <br />
                    Acceptable Use Policy
                    <br />
                    Code of Conduct
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-stain">
          <p>Term of Service | Security | ⓒ Scissor 2023</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default App;