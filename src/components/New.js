import React, { useState } from "react";
import Cin from './Cin';
import FadeIn from 'react-fade-in';
import Fadecar from "./Fadecar";
import Response from "./useWindowDimensions";
import Ackogeneral from "./Ackogeneral";
import ackomain from '../Assets/ackomain.png';

function New() {
 

  return (
    
    <div>
      <div className="create-main" >
        <div style={{ marginLeft: "130px" }}>
          <img
            src="https://image.pitchbook.com/CpJCqGKJ2YK69PfPl3gnTBL9Qn01616074965757_200x200"
            alt="acko"
            width="100"
          />
        </div>
        <div>
        <div
          className="tooltip3"
          style={{ marginTop: "-73px", marginLeft: "270px" }}
        >
          Products
         
          <div className="tooltiptext3">
            <div style={{ marginLeft: "-1043px", marginTop: "30px" }}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9797 21.288H19.3998"
                  stroke="#434F5A"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M21.8635 23.7481C23.2239 23.7481 24.3267 22.6453 24.3267 21.2849C24.3267 19.9246 23.2239 18.8218 21.8635 18.8218C20.5032 18.8218 19.4004 19.9246 19.4004 21.2849C19.4004 22.6453 20.5032 23.7481 21.8635 23.7481Z"
                  stroke="#434F5A"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M9.51711 23.7012C10.8775 23.7012 11.9803 22.5984 11.9803 21.2381C11.9803 19.8777 10.8775 18.7749 9.51711 18.7749C8.15675 18.7749 7.05396 19.8777 7.05396 21.2381C7.05396 22.5984 8.15675 23.7012 9.51711 23.7012Z"
                  stroke="#434F5A"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M6.62564 21.2849H5.66179C5.33065 21.2838 5.0113 21.1619 4.76349 20.9423C4.51568 20.7226 4.35641 20.4202 4.31548 20.0916L4.00948 17.1236C3.97013 16.7818 4.05737 16.4373 4.25469 16.1554C4.45202 15.8736 4.74578 15.6737 5.08044 15.5937L5.98308 15.3795C6.39787 15.2749 6.7615 15.0253 7.00811 14.6757L8.85931 12.0596C9.16027 11.6289 9.56091 11.2773 10.0271 11.0349C10.4933 10.7925 11.0112 10.6664 11.5366 10.6674H16.1264C16.7498 10.6656 17.367 10.7909 17.9404 11.0355C18.5138 11.2801 19.0314 11.6389 19.4616 12.0902L22.5214 15.3336L26.4073 16.0374C26.6702 16.0855 26.9204 16.1874 27.1421 16.3366C27.3639 16.4859 27.5525 16.6793 27.6961 16.9047C27.8397 17.1302 27.9352 17.3828 27.9767 17.6469C28.0182 17.9109 28.0048 18.1807 27.9372 18.4393L27.5701 19.9692C27.4711 20.356 27.2457 20.6986 26.9297 20.9425C26.6137 21.1865 26.2252 21.3177 25.826 21.3155H24.2043"
                  stroke="#434F5A"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M22.5377 15.3504L6.42773 15.228"
                  stroke="#434F5A"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
              </svg>
            </div>
            <div
              className="car"
              style={{ marginLeft: "-880px", marginTop: "-30px" }}
            >
              Car & taxi
            </div>
            <div
              className="car"
              style={{ marginRight: "900px", marginTop: "30px" }}
            >
              Comprehensive Car Insurance
            </div>
            <div
              className="car"
              style={{ marginRight: "900px", marginTop: "30px" }}
            >
              Third Party Car Insurance
            </div>
            <div
              className="car"
              style={{ marginRight: "900px", marginTop: "30px" }}
            >
              Commercial Car Insurance
            </div>

            <div>
              <div style={{ marginRight: "400px", marginTop: "-176px" }}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.52476 23.9519C9.47143 23.9519 11.0495 22.3738 11.0495 20.4271C11.0495 18.4804 9.47143 16.9023 7.52476 16.9023C5.57809 16.9023 4 18.4804 4 20.4271C4 22.3738 5.57809 23.9519 7.52476 23.9519Z"
                    stroke="#434F5A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M24.4752 23.9519C26.4219 23.9519 28 22.3738 28 20.4271C28 18.4804 26.4219 16.9023 24.4752 16.9023C22.5285 16.9023 20.9504 18.4804 20.9504 20.4271C20.9504 22.3738 22.5285 23.9519 24.4752 23.9519Z"
                    stroke="#434F5A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M7.17969 13.0514C9.58378 13.0182 11.9155 13.8734 13.7281 15.453C16.0155 13.9087 18.6651 12.9858 21.4169 12.7749"
                    stroke="#434F5A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M16.25 9.33514H18.0815C18.4716 9.32737 18.8563 9.42627 19.1943 9.62114C19.5323 9.81602 19.8107 10.0994 19.9994 10.4409L23.5414 16.9203"
                    stroke="#434F5A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M11.1016 21.1703H14.3844C14.8878 21.1799 15.3839 21.0492 15.8172 20.7929C16.2505 20.5365 16.6039 20.1646 16.8379 19.7189C17.4022 18.5844 18.1884 17.5747 19.15 16.7497C20.1116 15.9246 21.229 15.3009 22.4361 14.9155"
                    stroke="#434F5A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M24.4753 11.0117V13.9663"
                    stroke="#434F5A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                </svg>
              </div>
              <div
                className="car"
                style={{ marginRight: "300px", marginTop: "-30px" }}
              >
                Bike
              </div>
              <div
                className="car, hovcar"
                style={{ marginRight: "280px", marginTop: "30px" }}
              >
                Comprehensive Bike Insurance
              </div>
              <div
                className="car"
                style={{ marginRight: "280px", marginTop: "30px" }}
              >
                Third Party Bike Insurance
              </div>
            </div>

            <div>
              <div style={{ marginTop: "-125px", marginLeft: "250px" }}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3448 6.75253C20.3693 6.58182 19.368 6.66826 18.4335 7.00376C17.4991 7.33927 16.6619 7.91296 15.9997 8.67166C15.3374 7.91296 14.5003 7.33927 13.5658 7.00376C12.6314 6.66826 11.63 6.58182 10.6546 6.75253C9.09718 6.97548 7.68099 7.80395 6.6954 9.06859C5.70981 10.3332 5.2292 11.9386 5.3518 13.5568C5.3518 21.1242 15.1335 25.7694 15.556 25.9656L15.9997 26.1837L16.4433 25.9656C16.8447 25.7694 26.6475 21.1242 26.6475 13.5568C26.7701 11.9386 26.2896 10.3332 25.304 9.06859C24.3184 7.80395 22.9022 6.97548 21.3448 6.75253Z"
                    stroke="#434F5A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M11.9998 14.668L15.9998 18.668L24.9997 8.64978"
                    stroke="#434F5A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                </svg>
              </div>
              <div
                className="car"
                style={{ marginLeft: "350px", marginTop: "-33px" }}
              >
                Health
              </div>

              <div
                className="car"
                style={{ marginLeft: "340px", marginTop: "30px" }}
              >
                Health Insurance
              </div>
              <div
                className="car"
                style={{ marginLeft: "340px", marginTop: "30px" }}
              >
                Arogya Sanjeevani
              </div>
              <div
                className="car"
                style={{ marginLeft: "340px", marginTop: "30px" }}
              >
                Group Medical Cover
              </div>
            </div>
            <div>
              <div style={{ marginLeft: "844px", marginTop: "-172px" }}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.96 6.34847L25.5725 16.9609L21.3427 21.1908C19.9273 22.6061 18.0077 23.4013 16.0061 23.4013C14.0045 23.4013 12.0849 22.6061 10.6696 21.1908V21.1908C9.25425 19.7755 8.45911 17.8558 8.45911 15.8543C8.45911 13.8527 9.25423 11.933 10.6696 10.5177L14.8994 6.28784L14.96 6.34847Z"
                    stroke="#434F5A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M16.9541 8.82951L20.4489 5.33472"
                    stroke="#434F5A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M23.1716 15.0483L26.6664 11.5535"
                    stroke="#434F5A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M10.6663 21.3347L6.66626 25.3347"
                    stroke="#434F5A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M13.1534 16.8339L15.2304 16.3639L14.9727 20.3208L18.5203 15.5604L16.3978 15.9242L16.7465 12.0279L13.1534 16.8339Z"
                    fill="#434F5A"
                  ></path>
                </svg>
              </div>

              <div
                className="car"
                style={{ marginLeft: "980px", marginTop: "-32px" }}
              >
                Electronics
              </div>

              <div
                className="car"
                style={{ marginLeft: "960px", marginTop: "30px" }}
              >
                Mobile Protection
              </div>
              <div
                className="car"
                style={{ marginLeft: "960px", marginTop: "30px" }}
              >
                Arogya Sanjeevani
              </div>
              <div
                className="car"
                style={{ marginLeft: "960px", marginTop: "30px" }}
              >
                Appliance Protection
              </div>
            </div>
          </div>
        </div>
        <div
          className="navbar-style tooltip2"
          style={{ marginLeft: "380px",
                marginTop: "-36px",
                position: "absolute" }}
        >
        Resources
        <div className="tooltiptext2">
          <div style={{ marginRight: "145px", marginTop: "20px" }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6725 6H5.32847C5.14733 6 5.00049 6.14684 5.00049 6.32798V18.672C5.00049 18.8532 5.14733 19 5.32847 19H17.6725C17.8536 19 18.0005 18.8532 18.0005 18.672V6.32798C18.0005 6.14684 17.8536 6 17.6725 6Z"
                stroke="#434F5A"
                stroke-width="1.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M18.0003 13.0176H14.1638C13.9531 13.5591 13.5888 14.0273 13.1156 14.3645C12.6424 14.7018 12.0809 14.8934 11.5003 14.9158C10.9196 14.8934 10.3582 14.7018 9.88498 14.3645C9.41176 14.0273 9.04732 13.5591 8.83662 13.0176H5.00024"
                stroke="#434F5A"
                stroke-width="1.5"
                stroke-miterlimit="10"
              ></path>
            </svg>
          </div>
          <div style={{ marginTop: "-28px" }}>All Resources</div>

          <div style={{ marginRight: "145px", marginTop: "20px" }}>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.8205 12.1708V20.5829H5.41675V5.25165H12.5253"
                stroke="#434F5A"
                stroke-width="1.5"
                stroke-linejoin="round"
              ></path>
              <path
                d="M8.32495 13.0613H15.712"
                stroke="#434F5A"
                stroke-width="1.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M8.32495 16.4933H15.712"
                stroke="#434F5A"
                stroke-width="1.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M8.32495 9.30566H12.4029"
                stroke="#434F5A"
                stroke-width="1.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M17.9292 3.63545L18.4082 5.08368C18.442 5.1994 18.5124 5.30106 18.6088 5.37338C18.7053 5.44571 18.8225 5.48491 18.943 5.48491H20.4694C20.5917 5.48231 20.7116 5.51926 20.8112 5.59018C20.9108 5.6611 20.9849 5.76215 21.0225 5.87852C21.06 5.99489 21.059 6.1202 21.0196 6.23596C20.9802 6.35171 20.9045 6.45171 20.8038 6.52103L19.5782 7.41244C19.4793 7.4841 19.4055 7.58527 19.3675 7.70132C19.3295 7.81738 19.3291 7.94248 19.3664 8.05876L19.8344 9.50726C19.873 9.62223 19.8738 9.7465 19.8367 9.86197C19.7996 9.97745 19.7266 10.078 19.6282 10.149C19.5299 10.2199 19.4114 10.2576 19.2901 10.2564C19.1688 10.2552 19.0511 10.2151 18.9542 10.1422L17.7286 9.25075C17.6291 9.18074 17.5105 9.1433 17.3888 9.1433C17.2672 9.1433 17.1484 9.18074 17.0489 9.25075L15.8233 10.1422C15.7252 10.2118 15.6079 10.2492 15.4875 10.2491C15.3672 10.2489 15.2499 10.2114 15.1519 10.1416C15.0539 10.0718 14.9801 9.97321 14.9406 9.85953C14.9012 9.74584 14.8982 9.62275 14.9319 9.50726L15.4111 8.05876C15.4484 7.94248 15.448 7.81738 15.41 7.70132C15.372 7.58527 15.2982 7.4841 15.1993 7.41244L13.9626 6.52103C13.8682 6.4474 13.7989 6.34651 13.7643 6.23188C13.7297 6.11724 13.7313 5.99458 13.7692 5.88097C13.8071 5.76736 13.8792 5.66818 13.9757 5.59725C14.0721 5.52633 14.1883 5.48715 14.3081 5.48491H15.8233C15.9449 5.48379 16.0631 5.44455 16.1611 5.37257C16.259 5.30058 16.3319 5.19937 16.3693 5.08368L16.8372 3.63545C16.8772 3.52269 16.9513 3.4251 17.0491 3.35609C17.1468 3.28707 17.2636 3.25 17.3832 3.25C17.5029 3.25 17.6195 3.28707 17.7173 3.35609C17.815 3.4251 17.8891 3.52269 17.9292 3.63545Z"
                fill="#434F5A"
              ></path>
            </svg>
          </div>
          <div style={{ marginTop: "-28px", marginRight: "37px" }}>
            Guides
          </div>

          <div style={{ marginRight: "145px", marginTop: "20px" }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.2364 5H5.99976V19H18.2364V5Z"
                stroke="#434F5A"
                stroke-width="1.5"
                stroke-linejoin="round"
              ></path>
              <path
                d="M8.64893 12.1315H15.4005"
                stroke="#434F5A"
                stroke-width="1.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M8.64893 15.2604H15.4005"
                stroke="#434F5A"
                stroke-width="1.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M11.4548 7.55139H8.64893V10.3572H11.4548V7.55139Z"
                fill="#434F5A"
              ></path>
              <path
                d="M12.478 8.70374H15.4008"
                stroke="#434F5A"
                stroke-width="1.5"
                stroke-miterlimit="10"
              ></path>
            </svg>
          </div>
          <div style={{ marginTop: "-28px", marginRight: "28px" }}>
            Articles
          </div>
        </div>
        </div>
        </div>

        <div className="input-stylee">
          <div className="input-type input-type2">
            <svg
              width="13"
              height="18"
              viewBox="0 0 13 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.281 18.2345H3.59689C2.76756 18.2345 2.09692 17.5607 2.09692 16.7275V6.30727C2.09692 5.47406 2.76756 4.80029 3.59689 4.80029H11.281C12.1103 4.80029 12.781 5.47406 12.781 6.30727V16.7275C12.781 17.5607 12.1103 18.2345 11.281 18.2345Z"
                fill="#16C2F8"
              ></path>
              <path
                d="M9.65309 16.3985H1.96896C1.13963 16.3985 0.468994 15.7248 0.468994 14.8916V4.47133C0.468994 3.63812 1.13963 2.96436 1.96896 2.96436H9.65309C10.4824 2.96436 11.1531 3.63812 11.1531 4.47133V14.8967C11.1582 15.7248 10.4824 16.3985 9.65309 16.3985Z"
                fill="#70D4F9"
              ></path>
              <path
                d="M7.95865 13.9401L7.08324 14.1407C7.05253 14.1458 7.02181 14.1201 7.02693 14.0841L7.22658 13.2046C7.22658 13.1943 7.2317 13.1892 7.23682 13.184L8.93644 11.4765C9.04907 11.3633 9.22824 11.3633 9.33575 11.4765L9.67363 11.8159C9.78625 11.9291 9.78625 12.1091 9.67363 12.2171L7.97401 13.9247C7.97401 13.9349 7.96889 13.9401 7.95865 13.9401Z"
                fill="#C9EEFD"
              ></path>
              <path
                d="M9.38177 12.5168L8.64331 11.7749L8.48404 11.9349L9.22249 12.6768L9.38177 12.5168Z"
                fill="#70D4F9"
              ></path>
              <path
                d="M5.81365 9.66092C7.10857 9.66092 8.15831 8.60628 8.15831 7.30532C8.15831 6.00435 7.10857 4.94971 5.81365 4.94971C4.51873 4.94971 3.46899 6.00435 3.46899 7.30532C3.46899 8.60628 4.51873 9.66092 5.81365 9.66092Z"
                fill="#C9EEFD"
              ></path>
              <path
                d="M5.57285 8.22582L4.65137 7.29489L4.95853 6.9863L5.57285 7.60863L6.71958 6.45654L7.02674 6.77028L5.57285 8.22582Z"
                fill="#70D4F9"
              ></path>
              <path
                d="M6.43812 11.8417H2.53206C2.29145 11.8417 2.0918 11.6462 2.0918 11.3994C2.0918 11.1576 2.28633 10.957 2.53206 10.957H6.43812C6.67873 10.957 6.87838 11.1525 6.87838 11.3994C6.87326 11.6411 6.67873 11.8417 6.43812 11.8417Z"
                fill="#C9EEFD"
              ></path>
              <path
                d="M5.6139 14.017H2.53206C2.29145 14.017 2.0918 13.8215 2.0918 13.5746C2.0918 13.3329 2.28633 13.1323 2.53206 13.1323H5.6139C5.85451 13.1323 6.05417 13.3278 6.05417 13.5746C6.04905 13.8215 5.85451 14.017 5.6139 14.017Z"
                fill="#C9EEFD"
              ></path>
              <path
                d="M9.1975 5.89592C8.64461 5.89592 8.19411 5.44332 8.19411 4.88784V2.09506H8.90058V4.8827C8.90058 5.04728 9.03368 5.18101 9.1975 5.18101C9.36132 5.18101 9.49442 5.04728 9.49442 4.8827V2.03848C9.49442 1.51387 9.06952 1.08698 8.54735 1.08698C8.02517 1.08698 7.60027 1.51387 7.60027 2.03848V2.9797H6.8938V2.03848C6.8938 1.11784 7.6361 0.37207 8.55246 0.37207C9.46883 0.37207 10.2111 1.11784 10.2111 2.03848V4.88784C10.2009 5.44332 9.75039 5.89592 9.1975 5.89592Z"
                fill="#F75276"
              ></path>
            </svg>
            <div style={{ marginLeft: "20px", marginTop: "-18px" }}>
              {" "}
              Claim, edit, renew & more
            </div>
          </div>
          <div className="login-valid-style tooltip1" >login
          <div className="tooltiptext1" style={{marginLeft:"30px"}}>
          <div style={{ marginRight: "150px", marginTop: "20px", color:"black" }}>
            <img
              src="https://myaccount.ackoassets.com/static/images/header-icons/manage-policy-v2.svg"
              alt="Manage policy"  style={{color:"black"}}
            />
          </div>
          <div style={{ marginTop: "-28px",color:"black" }}>Manage policy</div>

          <div style={{ marginRight: "150px", marginTop: "20px" }}>
            <img
              src="https://myaccount.ackoassets.com/static/images/header-icons/raise-a-claim-v2.svg"
              alt="Raise a claim" style={{color:"black"}}
            />
          </div>
          <div style={{ marginTop: "-28px",color:"black" }}>Raise a claim</div>

          <div style={{ marginRight: "150px", marginTop: "20px" }}>
            <img
              src="https://myaccount.ackoassets.com/static/images/header-icons/renew-policy-v2.svg"
              alt="Renew policy" style={{color:"black"}}
            />{" "}
          </div>
          <div style={{ marginTop: "-28px",color:"black" }}>Renew policy</div>
        </div> 
           </div>
          <div className="edit-valid-style" style={{ marginRight: "90px",paddingLeft:"60px" }}>
            {" "}
            Help
          </div>
        </div>
        <div>
          <h1 className="insure-h1">Insurance made easy</h1>
          <p className="p-style">Zero commission. Zero paperwork</p>
        </div>

        <div width="21%" className="car-image">
          <img src="https://acko-home-prod.ackoassets.com/next_assets/5ce5234a43ed2b5d41ff9ba5bf62a3e996e5d026/_next/static/images/homepage-banner-illustration-1-5d2a4d352884a025c5e728efb0a4c6ce.svg" />
        </div>
        <div width="30%" style={{ marginTop: "-328px", marginLeft: "1230px" }}>
          <img src="https://acko-home-prod.ackoassets.com/next_assets/5ce5234a43ed2b5d41ff9ba5bf62a3e996e5d026/_next/static/images/homepage-banner-illustration-2-99577afed0f02e7ee1411f1e8aede6c9.svg" />
        </div>

       {/*  <div className="cugJOq">
          <div className="NChTW">
            <div className="qKwYC">
              <div
                className="cFRTzp"
                style={{ marginTop: "-968px", marginLeft: "-254px" }}
              >
                <div>
                  {" "}
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyI+PGcgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjQiIvPjx1c2UgeGxpbms6aHJlZj0iI0IiIHg9Ii0xNi45MzUiLz48cGF0aCBkPSJNMzIuMDg2IDE3LjE0N2MtMi4wNDMtLjcwNC0yLjc1My0uODQ5LTUuMzUzLTEuMjg1LS41MDMtLjA4OS0uOTgzLS4yNzktMS4zMTEtLjY3bC00LjA5Ny00LjAyMmMtLjUyNC0uNTE0LTEuMjAyLS44MzgtMS45MzQtLjkxNmEzOS43OCAzOS43OCAwIDAgMC04LjU1NS0uMDQ1Yy0uOTcyLjEwMS0xLjg1Ny42MTQtMi40MjUgMS40MTlsLTIuMjQgMy4xODRhLjc2Ljc2IDAgMCAxLS40NDguMzEzbC0xLjM1NS4zNDZjLS44NDEuMjIzLTEuNDA5IDEuMDE3LTEuMzY2IDEuODg4bC4yMjkgNC4zNDZjLjA1NS45ODMuODQxIDEuNzQzIDEuODAzIDEuNzQzaC42ODh2LS4wMjJjMC0yLjUxNCAxLjk4OC00LjU0OCA0LjQ0Ny00LjU0OHM0LjQ0NyAyLjAzNCA0LjQ0NyA0LjU0OHYuMDIyaDguMDQxdi0uMDIyYzAtMi41MTQgMS45ODgtNC41NDggNC40NDctNC41NDhzNC40NDcgMi4wMzQgNC40NDcgNC41NDh2LjAyMmguNTc5Yy41NzkgMCAxLjA4Mi0uNDM2IDEuMTY5LTEuMDE3bC4zMTctMi44NDljLjEwOS0xLjA3My0uNTI0LTIuMTAxLTEuNTI5LTIuNDM2ek0xMi45NDUgMTUuMjdsLTMuNzgtLjA1NmMtLjMzOSAwLS41NzktLjM1Ny0uNDQ4LS42ODJsLjc2NS0xLjk3OGMuMTk3LS41MDMuNjQ1LS44NDkgMS4xNjktLjg5NGwyLjI5NC0uMTM0djMuNzQzem04Ljk4MS4xMjNsLTcuMzQyLS4xMDF2LTMuODFsNC4zNTkuMTc5YTEuMzEgMS4zMSAwIDAgMSAuODQxLjQyNWwyLjQwNCAyLjcwNGMuMjA4LjIzNS4wNDQuNjAzLS4yNjIuNjAzeiIvPjwvZz48ZGVmcyA+PHBhdGggaWQ9IkIiIGQ9Ik0yNy4xMDUgMjAuMTYzYy0xLjc3IDAtMy4yMDEgMS40NjQtMy4yMDEgMy4yNzRzMS40MzEgMy4yNzQgMy4yMDEgMy4yNzQgMy4yMDEtMS40NjQgMy4yMDEtMy4yNzQtMS40MzEtMy4yNzQtMy4yMDEtMy4yNzR6Ii8+PC9kZWZzPjwvc3ZnPg=="
                    alt="car icon"
                    style={{ width: "36px", height: "36px" }}
                  />
                </div>
                <div className="zbmZg">Car & taxi</div>
              </div>
              <div
                className="cFRTzp"
                style={{ marginTop: "-968px", marginLeft: "1px" }}
              >
                <div>
                  {" "}
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0iI2ZmZiIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNOC4wMjYgMTcuMjIyQTUuMDMgNS4wMyAwIDAgMCAzIDIyLjI0OGE1LjAzIDUuMDMgMCAwIDAgNS4wMjYgNS4wMjZjMi43NSAwIDUuMDI2LTIuMjc2IDUuMDI2LTUuMDI2YTUuMDMgNS4wMyAwIDAgMC01LjAyNi01LjAyNnptMCA3LjY4MWEyLjY1NSAyLjY1NSAwIDEgMSAwLTUuMzEgMi42NTUgMi42NTUgMCAxIDEgMCA1LjMxem0yMS42MjItNi45N2wuMzMyLS41NjlhNS44MyA1LjgzIDAgMCAwLTIuOTQtLjgwNmMtLjI4NSAwLS42MTYuMDQ3LS45MDEuMDk1bC0zLjI3Mi02LjYzOC0zLjg0MS0uOTQ4Yy0uMzc5LS4xOS0uODU0LjA0Ny0uOTk2LjQ3NHMuMDQ3Ljg1My40MjcgMS4wNDNsMi43MDMgMS4yMzMuNDI3LjgwNmMtNC45MzEuMzMyLTYuODc1IDIuOTQtOS4xNTEgMS44OTctMS41NjUtLjg1NC00LjAzLTEuMjMzLTUuNTQ4LTEuNDIzLS42NjQtLjA5NS0xLjI4LjQyNy0xLjI4IDEuMTM4YTEuMTYgMS4xNiAwIDAgMCAxLjA0MyAxLjIzM2MxLjQyMi4xNDIgMy40NjEuNDc0IDQuNjQ3IDEuMTM4IDAgMCAzLjMxOSAxLjYxMiAzLjM2NiA2LjExN2EuNzUuNzUgMCAwIDAgLjc1OS43NTloMy4wMzVhLjc3Ljc3IDAgMCAwIC43MTEtLjUyMmMuMzc5LTEuMjggMS40Ny00LjU1MiAzLjg4OC03LjMwMmwuOTAxIDEuNzU0Yy0xLjU2NSAxLjA0My0yLjYwOCAyLjc5Ny0yLjYwOCA0Ljc4OWguNjY0YzAgMi43NSAyLjI3NiA1LjAyNiA1LjAyNiA1LjAyNnM1LjA3My0yLjIyOCA1LjA3My00Ljk3OWE0Ljk4IDQuOTggMCAwIDAtMi40NjYtNC4zMTV6bS0yLjU2IDYuOTdhMi42NTUgMi42NTUgMCAxIDEgMC01LjMxMSAyLjY1NSAyLjY1NSAwIDEgMSAwIDUuMzExem0tMS40NzEtMTEuMjg1Yy4wOTUuMjM3LjMzMi40MjcuNjE2LjQyN2wxLjEzOC4wNDdhLjUyLjUyIDAgMCAwIC41MjItLjY2NGwtLjY2NC0yLjU2YS41MS41MSAwIDAgMC0uODA2LS4zMzJsLTEuMTM4LjkwMWMtLjIzNy4xOS0uMzMyLjUyMi0uMjM3LjgwNmwuNTY5IDEuMzc1eiIvPjwvc3ZnPg==" />
                </div>
                <div className="zbmZg">Bike</div>
              </div>
              <div className="cFRTzp" style={{ marginTop: "-968px" }}>
                <div>
                  {" "}
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0ibm9uZSIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNMTguNTU0IDIxLjcyMmMtLjI1NS4yNTUtLjUxLjI1NS0uNzY1LjI1NXMtLjUxLS4xMjgtLjc2NS0uMjU1bC0zLjgyNi0zLjY5OGMtLjM4My0uMzgzLS4zODMtMS4xNDggMC0xLjUzczEuMTQ4LS4zODMgMS41MyAwbDMuMDYxIDIuOTMzIDEwLjA3NC05LjQzN2MtLjg5My0uODkzLTIuMTY4LTEuNjU4LTMuODI2LTEuOTEzLTMuODI2LS42MzgtNi4yNDkgMi45MzMtNi4yNDkgMi45MzNzLTIuMjk1LTMuNDQzLTYuMTIxLTIuODA2Yy01LjEwMS43NjUtNi43NTkgNS44NjYtNC45NzMgMTAuNTg1IDEuNzg1IDQuODQ2IDguMTYyIDguNTQ0IDEwLjMzIDkuNjkyLjUxLjI1NSAxLjAyLjI1NSAxLjUzIDAgMi4xNjgtMS4xNDggOC41NDQtNC43MTggMTAuNDU3LTkuODE5Ljg5My0yLjQyMy44OTMtNC44NDYgMC02Ljg4NmwtMTAuNDU3IDkuOTQ3eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==" />
                </div>
                <div className="zbmZg">Health</div>
              </div>
            </div>
          </div>
          <div
            className="lcaoVU"
            style={{ marginLeft: "545px", marginTop: "-400px" }}
          >
            <form>
              <input
                className="gEOaHS"
                id="carNumber"
                name="carNumber"
                autocapitalize="uppercase"
              />
              <button
                type="submit"
                id="submit"
                className="iRBaqp"
                style={{ marginTop: "-200px", color: "red" }}
              ></button>
              <p className="juPkyH">Enter your car number</p>
            </form>
            <div className="jgFppM">
              <img
                src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMjggMTYiIHdpZHRoPSIyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjQuOTg1NyA1LjQ2NDUxLTQuMTU4Mi0uOTY1MTMtMy40NzQyLTMuMTk0NDJjLS45MTIyLS44NDI3ODctMi4wOTI2LTEuMzA0OTYtMy4zMjY2LTEuMzA0OTZoLTQuOTYzMTVjLTEuNDQ4NjkgMC0yLjc3NjY2LjcyMDQ0NS0zLjU1NDY2IDEuOTQzODRsLTEuNjc2NzMgMi41OTYzMy0xLjIzNDA3LjI4NTQ1Yy0xLjEyNjc2LjI1ODI4LTEuOTMxNTg2IDEuMjc3NzgtMS45MzE1ODYgMi40NjAzOXYyLjg2ODE5YzAgMS4zMTg2Ljk3OTIwNiAyLjQwNiAyLjI5Mzc2NiAyLjUxNDhsMS4zODE2Mi4xMjIzYy40MTU4MyAxLjQxMzcgMS42NzY3MyAyLjQ0NjggMy4xOTI0OSAyLjQ0NjggMS40ODg5MyAwIDIuNzM2NDItMS4wMDU5IDMuMTc5MDItMi4zNzg4aDcuMzM3NGMuNDI5MiAxLjM3MjkgMS42OTAxIDIuMzc4OCAzLjE3OTEgMi4zNzg4IDEuNTk2MiAwIDIuOTI0Mi0xLjE0MTggMy4yNTk1LTIuNjUwN2wxLjMwMTItLjQzNWMuOTI1NS0uMjk5IDEuNTQyNi0xLjE2OSAxLjU0MjYtMi4xMzQxdi0xLjU3Njg2YzAtMS40MjcyOS0uOTY1OC0yLjY1MDY5LTIuMzQ3NS0yLjk3Njkzem0tOC44NTMxLTIuODAwMjIgMS45MDQ4IDEuNzY3MTNoLTUuODYxOHYtMi41ODI3M2gxLjg1MTFjLjc3OCAwIDEuNTI5MS4yODU0NiAyLjEwNTkuODE1NnptLTkuMTA3OTUuMjg1NDZjLjQ0MjY2LS42OTMyNiAxLjIwNzI0LTEuMTAxMDYgMi4wMjU0OS0xLjEwMTA2aDEuMzAxMTZ2Mi41ODI3M2gtNC4yNzkwM3ptLjUyMzE0IDEwLjQ1MzI1Yy0uODQ1MDcgMC0xLjUyOTE3LS43MDY5LTEuNTI5MTctMS41NjMyIDAtLjg3LjY4NDEtMS41NjMzIDEuNTI5MTctMS41NjMzczEuNTI5MTcuNzA2OSAxLjUyOTE3IDEuNTYzM2MwIC44NTYzLS42OTc1MSAxLjU2MzItMS41MjkxNyAxLjU2MzJ6bTEzLjY4MjExIDBjLS44NDUxIDAtMS41MjkyLS43MDY5LTEuNTI5Mi0xLjU2MzIgMC0uODcuNjg0MS0xLjU2MzMgMS41MjkyLTEuNTYzMy44NDUgMCAxLjUyOTIuNzA2OSAxLjUyOTIgMS41NjMzIDAgLjg1NjMtLjY4NDIgMS41NjMyLTEuNTI5MiAxLjU2MzJ6bTQuMjc5LTMuMzg0N2MwIC4xNzY3LS4xMDczLjMyNjItLjI4MTcuMzk0MmwtLjg1ODUuMjg1NGMtLjQ2OTUtMS4zMTg1Mi0xLjY5MDEtMi4yNzAwNS0zLjEzODgtMi4yNzAwNS0xLjU2OTQgMC0yLjg4NCAxLjExNDY1LTMuMjQ2MiAyLjU5NjM1aC03LjIwMzJjLS4zNjIyLTEuNDgxNy0xLjY2MzI5LTIuNTk2MzUtMy4yMzI3MS0yLjU5NjM1LTEuNTQyNTkgMC0yLjgzMDMyIDEuMDczODctMy4yMTkzMiAyLjUxNDc1bC0xLjIwNzI0LS4xMDg3Yy0uMzYyMTctLjAyNzItLjYzMDQ1LS4zMjYzLS42MzA0NS0uNjc5N3YtMi44NjgxOWMwLS4zMjYyNC4yMTQ2Mi0uNTk4MS41MzY1NS0uNjY2MDdsMS40ODg5NC0uMzUzNDJoMTUuNzg4MDNsNC4yOTI0Ljk5MjMxYy41NS4xMjIzNC45MzkuNjExNy45MzkgMS4xODI2MXYxLjU3Njg2eiIgZmlsbD0iIzdkODk5YiIvPjwvc3ZnPg=="
                alt="car icon"
              />
              &nbsp;&nbsp;
              <p className="ekLCtT">
                Enter your &nbsp;
                <span style={{ color: "#7C47E1" }}>car</span>&nbsp; number
              </p>
            </div>
            <div
              className="hnEcVH"
              style={{ marginLeft: "-60px", marginTop: "20px" }}
            >
              <p className="eAeVoP">Insure now </p>
              <img
                src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjEzIiB2aWV3Qm94PSIwIDAgMTMgMTMiIHdpZHRoPSIxMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJtMSA2LjE4NTA2aDEwLjM3MDQiLz48cGF0aCBkPSJtNi4xODU1NSAxIDUuMTg1MTUgNS4xODUxOS01LjE4NTE1IDUuMTg1MjEiLz48L2c+PC9zdmc+"
                style={{ marginLeft: "8px", height: "16px" }}
              />
            </div>
          </div>
          <div className="fSWgSF">
            <div className="gotEak"> </div>
            <p className="kdDWUG">OR</p>
            <div className="gotEak"></div>
          </div>
          <div className="jzTvIn" style={{ marginLeft: "541px" }}>
            <div className="fRJFwS">
              <img
                src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgNDEgNDAiIHdpZHRoPSI0MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjAuNzg3NiA0MGMxMS4wNDU3IDAgMjAtOC45NTQzIDIwLTIwcy04Ljk1NDMtMjAtMjAtMjAtMjAuMDAwMDAyIDguOTU0My0yMC4wMDAwMDIgMjAgOC45NTQzMDIgMjAgMjAuMDAwMDAyIDIweiIgZmlsbD0iIzcwM2JkOSIvPjxnIGZpbGw9IiMxNmMyZjgiPjxwYXRoIGQ9Im0yNy40ODEyIDIyLjcxMDRjLS42MDI1IDAtMS4xODAzLjIzOTQtMS42MDYzLjY2NTRzLS42NjUzIDEuMDAzOC0uNjY1MyAxLjYwNjJjLjAwMDIuNjAyNS4yMzk2IDEuMTgwMS42NjU2IDEuNjA2MS40MjU5LjQyNiAxLjAwMzYuNjY1NCAxLjYwNi42NjU2LjYwMjUgMCAxLjE4MDMtLjIzOTQgMS42MDYzLS42NjU0cy42NjUzLTEuMDAzOC42NjUzLTEuNjA2M2MuMDAwMS0uMjk4My0uMDU4Ni0uNTkzNy0uMTcyNy0uODY5NC0uMTE0MS0uMjc1Ni0uMjgxNC0uNTI2MS0uNDkyNC0uNzM3LS4yMTA5LS4yMTEtLjQ2MTQtLjM3ODMtLjczNzEtLjQ5MjQtLjI3NTYtLjExNDItLjU3MS0uMTcyOS0uODY5NC0uMTcyOHoiLz48cGF0aCBkPSJtMTQuNTgxIDIyLjcyOTJjLS41OTY5IDAtMS4xNjk0LjIzNzItMS41OTE1LjY1OTMtLjQyMi40MjItLjY1OTIuOTk0NS0uNjU5MiAxLjU5MTRzLjIzNzIgMS4xNjk0LjY1OTIgMS41OTE1Yy40MjIxLjQyMi45OTQ2LjY1OTIgMS41OTE1LjY1OTJzMS4xNjk0LS4yMzcyIDEuNTkxNS0uNjU5MmMuNDIyLS40MjIxLjY1OTItLjk5NDYuNjU5Mi0xLjU5MTUgMC0uMjk1Ni0uMDU4My0uNTg4Mi0uMTcxNC0uODYxM3MtLjI3ODgtLjUyMTItLjQ4NzgtLjczMDFjLS4yMDktLjIwOS0uNDU3MS0uMzc0OC0uNzMwMi0uNDg3OS0uMjczMS0uMTEzMi0uNTY1Ny0uMTcxNC0uODYxMy0uMTcxNHoiLz48cGF0aCBkPSJtMzEuMjc0OSAyMC4yOTg2Yy0xLjU1MjItLjUyMTUtMi4wOTU1LS42MzI1LTQuMDc5OS0uOTU2OS0uMzgzNC0uMDYyOS0uNzQ5LS4yMDcyLTEuMDAyLS41MDE0bC0zLjEyMTQtMi45OTQ5Yy0uNDAxLS4zODM5LS45MTc5LS42MjQzLTEuNDY5OS0uNjgzNy0yLjE2NDctLjIzOTItNC4zNDg1LS4yNDk0LTYuNTE1My0uMDMwMy0uMzY2NS4wMzQyLS43MjEzLjE0NjUtMS4wNDA4LjMyOTQtLjMxOTQuMTgyOC0uNTk1OS40MzItLjgxMDkuNzMwN2wtMS42OTg5IDIuMzczM2MtLjA4MTEuMTE1NS0uMjAwOS4xOTgtLjMzNzYuMjMyOGwtMS4wNC4yNjI0Yy0uMzA4NjguMDc3OS0uNTgwNzIuMjYwOC0uNzY5NTcuNTE3MS0uMTg4ODUuMjU2NC0uMjgyNzUuNTcwNC0uMjY1NjguODg4NGwuMTczODIgMy4yMzg2Yy4wMTg4Ny4zNTEuMTcxNTYuNjgxNC40MjY2Ni45MjMycy41OTMxNy4zNzY2Ljk0NDY3LjM3NjdoLjUyNjJjMC0uMDA2MiAwLS4wMTI0IDAtLjAxODYgMC0uNDQ0OS4wODc3LS44ODU0LjI1NzktMS4yOTY0cy40MTk4LS43ODQ0LjczNDMtMS4wOTljLjMxNDYtLjMxNDYuNjg4MS0uNTY0MSAxLjA5OTEtLjczNDMuNDExLS4xNzAzLjg1MTUtLjI1NzkgMS4yOTY0LS4yNTc5LjQ0NDggMCAuODg1My4wODc2IDEuMjk2Mi4yNTc5LjQxMS4xNzAyLjc4NDQuNDE5OCAxLjA5ODkuNzM0My4zMTQ1LjMxNDYuNTY0LjY4ODEuNzM0MSAxLjA5OTEuMTcwMi40MTEuMjU3Ny44NTE1LjI1NzYgMS4yOTYzdi4wMTg2aDYuMTMxMWMwLS4wMDYyIDAtLjAxMjQgMC0uMDE4Ni0uMDAwMS0uNDQ0OC4wODc1LS44ODUzLjI1NzYtMS4yOTYzLjE3MDItLjQxMS40MTk2LS43ODQ1LjczNDEtMS4wOTkxLjMxNDUtLjMxNDUuNjg4LS41NjQxIDEuMDk4OS0uNzM0My40MTEtLjE3MDMuODUxNS0uMjU3OSAxLjI5NjMtLjI1NzkuODk4NCAwIDEuNzYwMS4zNTY5IDIuMzk1NC45OTIycy45OTIyIDEuNDk3Ljk5MjIgMi4zOTU0di4wMTg2aC40NDAxYy4yMTQ1IDAgLjQyMjEtLjA3NjMuNTg1NS0uMjE1NHMuMjcxOS0uMzMxOC4zMDYyLS41NDM2bC4yMzc1LTIuMTIzNGMuMDQzOC0uMzkxOC0uMDQ4NS0uNzg2OC0uMjYxMy0xLjExODdzLS41MzMyLS41ODA1LS45MDc1LS43MDQzem0tMTMuODg2Ni0xLjM5Ny0zLjU3LS4wMzk1Yy0uMDYwNS0uMDAxLS4xMTk5LS4wMTY2LS4xNzMxLS4wNDU1LS4wNTMxLS4wMjg5LS4wOTg1LS4wNzAzLS4xMzIyLS4xMjA1LS4wMzM3LS4wNTAzLS4wNTQ3LS4xMDgtLjA2MTMtLjE2ODEtLjAwNjYtLjA2MDIuMDAxNS0uMTIxLjAyMzYtLjE3NzRsLjU4MDUtMS40NzQ2Yy4wNzE1LS4xODMxLjE5MjctLjM0MjcuMzUtLjQ2MDcuMTU3Mi0uMTE4MS4zNDQzLS4xODk5LjU0MDEtLjIwNzUuNTQ5NS0uMDQ3MyAxLjgzNjMtLjA3NzYgMi40NDQ3LS4xMDI0em02LjE0ODIuMDkzOS00LjkwMTgtLjA3NzZ2LTIuODM0MmMuODc3OS0uMDExNCAxLjc1NTYuMDMzMiAyLjYyNzguMTMzNC4yNDUyLjAyMzMuNDcyOS4xMzcuNjM4OC4zMTlsMS44MzQ2IDIuMDE3OWMuMDM0MS4wMzgyLjA1NjQuMDg1NS4wNjQyLjEzNjEuMDA3Ny4wNTA3LjAwMDYuMTAyNS0uMDIwNS4xNDkxLS4wMjExLjA0NjctLjA1NTMuMDg2Mi0uMDk4NS4xMTM4LS4wNDMxLjAyNzctLjA5MzQuMDQyMi0uMTQ0Ni4wNDE4eiIvPjwvZz48ZyBmaWxsPSIjZmZlNDZlIj48cGF0aCBkPSJtMjEuNTgzNCAxMS4yNDA4Yy0uMTY5Ni0uMjA0Ni0uMzk1MS0uMzU1NC0uNjQ5LS40MzM4LS4yNTM5LS4wNzg1LS41MjUyLS4wODEyLS43ODA2LS4wMDc4LS45MjEyLjI0NTItMS42OTI3IDEuMjk4NC0yLjA3NjggMi43ODM4LS4zODgxLTEuNDg1NC0xLjE1NTYtMi41Mzg2LTIuMDc2OC0yLjc4MzgtLjI1NTUtLjA3MjktLjUyNjYtLjA2OTktLjc4MDQuMDA4NXMtLjQ3OTMuMjI4OS0uNjQ5Mi40MzMxYy0uMzI2LjM3NzItLjQwMi45MDU3LS4yMDMzIDEuNDE0OC4zODQxLjk4NTYgMS42Mjk4IDEuNjkwMyAzLjMzMjUgMS44ODQzbC4xNzc3LjAyMDJoLjQwOThsLjE2NjEtLjAxODZjMS43MDI3LS4xOTQgMi45NDkxLS44OTg3IDMuMzMzMy0xLjg4NDQuMTk4Ny0uNTEwNi4xMjI2LTEuMDM5MS0uMjAzMy0xLjQxNjN6bS02LjIwODggMS4xNDYzYy0uMDM3Mi0uMDk2My0uMDc3Ni0uMjc4Ny4wNDA0LS40MTkxLjAzNi0uMDQ3NC4wODIzLS4wODYuMTM1NC0uMTEyOXMuMTExNi0uMDQxNC4xNzExLS4wNDIzYy4wNDI4LjAwMDQuMDg1My4wMDY0LjEyNjYuMDE3OC4zNzk1LjEwMDkuODQyLjYxMTYgMS4xMTk4IDEuNTQwNS0uOTYzOS0uMjA2NC0xLjQ1OS0uNjQxOC0xLjU5MzMtLjk4NHptNS40MDU1IDBjLS4xMzQzLjM0NDYtLjYyOTQuNzc2MS0xLjU5MzMuOTg3Mi4yNzg2LS45MzE0Ljc0MTItMS40Mzk3IDEuMTE5OS0xLjU0MDYuMDQxNS0uMDExMy4wODQyLS4wMTczLjEyNzMtLjAxNzguMDYwMS4wMDAzLjExOTQuMDE0NS4xNzMzLjA0MTQuMDUzOC4wMjY5LjEwMDcuMDY1OC4xMzcxLjExMzguMTE3Mi4xMzczLjA3MjkuMzE5Ny4wMzQ5LjQxNnoiLz48cGF0aCBkPSJtMTguODQ3OSAxNC45NzQ2aC0xLjQ1OTh2MTAuMDA3N2gxLjQ1OTh6Ii8+PC9nPjwvc3ZnPg=="
                alt="car icon"
                className="bRTQVF"
              />
              <div className="jCnDwj">
                <p className="detjqg">Looking to insure your new car?</p>
                <p className="bqVLHP">
                  Save big with our zero commission insurance
                </p>
              </div>
              <button className="jBqRDn">Get a quote</button>
            </div>
          </div>
        </div>*/}
        <div >
        <Fadecar/>
        </div>

     

      {/* <div className="bBvcLJ" style={{ marginTop: "-255px" }}>
          <div className="gKMByB">
            {" "}
            <img
              src="https://acko-home-prod.ackoassets.com/next_assets/5ce5234a43ed2b5d41ff9ba5bf62a3e996e5d026/_next/static/images/arshad-warsi-banner-58d51f52b11fa83c7786a80bd1a02169.png"
              alt="Arshad Warsi"
              className="inBnsE"
            />
          </div>
          <div className="save-style">
            <img
              src="https://www.acko.com/home-next/images?url=https%3A%2F%2Facko-home-prod.ackoassets.com%2Fnext_assets%2F5ce5234a43ed2b5d41ff9ba5bf62a3e996e5d026%2F_next%2Fstatic%2Fimages%2Ftypo-low-premium-new-884973769e7a8f45764b63addb7a6b14.svg&w=384&q=75"
              className="save-style2"
              style={{ marginTop: "301px", marginLeft: "648px" }}
            />
          </div>

          <div className="cxyJPj">
            <div className="iauIad">
              <p className="CSEAz">Official Insurance Partner</p>{" "}
            </div>
            <div className="hrLZta">
              <div className="igal">
                <div
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    maxWidth: "100%",
                  }}
                >
                  <img
                    src="https://www.acko.com/home-next/images?url=https%3A%2F%2Facko-home-prod.ackoassets.com%2Fnext_assets%2F5ce5234a43ed2b5d41ff9ba5bf62a3e996e5d026%2F_next%2Fstatic%2Fimages%2Fsunrisers-hyderabad-baa8b5ac7605cd2fa307c8de9b5a36a5.svg&w=96&q=75"
                    className="igalimg"
                    style={{ marginTop: "310px", marginLeft: "890px" }}
                  />
                </div>
                <div className="jHuQxV" style={{ marginLeft: "50px" }}></div>
              </div>

              <div className="igal">
                <div
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    maxWidth: "100%",
                  }}
                >
                  <img
                    src="https://www.acko.com/home-next/images?url=https%3A%2F%2Facko-home-prod.ackoassets.com%2Fnext_assets%2F5ce5234a43ed2b5d41ff9ba5bf62a3e996e5d026%2F_next%2Fstatic%2Fimages%2Fdelhi-capitals-88769317f23983e5c4439560a4efdf5f.svg&w=96&q=75"
                    className="stap"
                    style={{ marginTop: "680px", marginLeft: "937px" }}
                  />
                </div>
              </div>
              <div
                className="jHuQxV"
                style={{ marginTop: " -51px", marginLeft: "100px" }}
              ></div>

              <div className="igal">
                <div
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    maxWidth: "100%",
                  }}
                >
                  <img
                    src="https://www.acko.com/home-next/images?url=https%3A%2F%2Facko-home-prod.ackoassets.com%2Fnext_assets%2F5ce5234a43ed2b5d41ff9ba5bf62a3e996e5d026%2F_next%2Fstatic%2Fimages%2Fmumbai-indians-678e33cfeb6c33bad8102ccfeccadad7.svg&w=128&q=75"
                    className="indias"
                    style={{ marginTop: "680px", marginLeft: "990px" }}
                  />
                </div>
              </div>
            </div>
          </div>
                </div>  */}
                <div ><img src={ackomain} alt="ackomain"  className="ackomainimg"/></div>
        <div className="jshtgK" style={{ marginLeft: "650px",marginTop:"-150px" }}>
          <div className="kuUxhF">
            <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjIxIiB2aWV3Qm94PSIwIDAgMjEgMjEiIHdpZHRoPSIyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtOC43NzczOSAxNS41NDU5Yy0uNDU5ODYtLjYzODctMS4yNTE4My0uOTcwOC0yLjAxODI1LS44NDMtLjYzODY5LjEwMjItMS4yMjYyOC0uMDc2Ny0xLjY2MDU5LS40MzQzbC0xLjczNzIyIDIuNTAzNiAyLjc4NDY3LS4xNzg4Ljc5MTk3IDIuNjU2OSAyLjI3MzcyLTMuMjcwMWMtLjE1MzI4LS4xMjc3LS4zMDY1Ny0uMjU1NC0uNDM0My0uNDM0M3oiIGZpbGw9IiMxNmMyZjgiLz48cGF0aCBkPSJtMTQuMTE2IDE0LjcwMjRjLS43OTItLjE1MzMtMS41NTg0LjE3ODgtMi4wMTgzLjg0My0uMTAyMS4xNTMzLS4yMDQzLjI4MS0uMzMyMS4zODMybDIuMzI0OCAzLjMyMTIuNzkyLTIuNjU2OSAyLjc4NDcuMTc4OC0xLjc4ODMtMi41ODAzYy0uNDU5OS40MDg4LTEuMDk4Ni42Mzg3LTEuNzYyOC41MTF6IiBmaWxsPSIjMTZjMmY4Ii8+PHBhdGggZD0ibTExLjk0MzggMi41MTYxOWMuNDA4OC41ODc1OSAxLjEyNDEuODY4NjEgMS44MTM5Ljc0MDg4IDEuMjUxOC0uMjI5OTMgMi4zMjQ4Ljg2ODYxIDIuMDk0OSAyLjA5NDg5LS4xMjc4LjY4OTc4LjE3ODggMS40MDUxMS43NDA4IDEuODEzODYgMS4wNDc1LjcxNTMzIDEuMDQ3NSAyLjI0ODE4IDAgMi45NjM0OC0uNTg3Ni40MDg4LS44Njg2IDEuMTI0MS0uNzQwOCAxLjgxMzkuMjI5OSAxLjI1MTgtLjg2ODcgMi4zMjQ4LTIuMDk0OSAyLjA5NDktLjY4OTgtLjEyNzgtMS40MDUxLjE3ODgtMS44MTM5Ljc0MDktLjcxNTMgMS4wNDc0LTIuMjQ4MTcgMS4wNDc0LTIuOTYzNSAwLS40MDg3Ni0uNTg3Ni0xLjEyNDA5LS44Njg3LTEuODEzODctLjc0MDktMS4yNTE4My4yNTU1LTIuMzUwMzctLjgxNzUtMi4xMjA0NC0yLjA2OTQuMTI3NzQtLjY4OTctLjE3ODgzLTEuNDA1MS0uNzQwODctMS44MTM4LTEuMDQ3NDUtLjcxNTM1LTEuMDQ3NDUtMi4yNDgyIDAtMi45NjM1My41ODc1OS0uNDA4NzYuODY4NjEtMS4xMjQwOS43NDA4Ny0xLjgxMzg3LS4yMjk5My0xLjI1MTgyLjg2ODYxLTIuMzI0ODEgMi4wOTQ4OS0yLjA5NDg5LjY4OTc4LjEyNzc0IDEuNDA1MTEtLjE3ODgzIDEuODEzODctLjc0MDg3LjcxNTMzLTEuMDQ3NDUgMi4yNDgxNS0xLjA0NzQ1IDIuOTg5MDUtLjAyNTU1eiIgZmlsbD0iI2QxYzBmZiIvPjxwYXRoIGQ9Im0xMC41MTM3IDEyLjcxYzIuMjg1NyAwIDQuMTM4Ny0xLjg1MyA0LjEzODctNC4xMzg3IDAtMi4yODU3My0xLjg1My00LjEzODY4LTQuMTM4Ny00LjEzODY4LTIuMjg1NzUgMC00LjEzODcgMS44NTI5NS00LjEzODcgNC4xMzg2OCAwIDIuMjg1NyAxLjg1Mjk1IDQuMTM4NyA0LjEzODcgNC4xMzg3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im05LjkyNjg5IDEwLjMwODRjLS4xMjc3MyAwLS4yNTU0Ny0uMDUxMS0uMzU3NjYtLjE1MzNsLTEuMjAwNzMtMS4yMDA3NGMtLjE3ODgzLS4xNzg4My0uMTc4ODMtLjUxMDk1IDAtLjY4OTc4cy41MTA5NS0uMTc4ODMuNjg5NzggMGwuODY4NjEuODY4NjEgMS45MTYxMS0xLjkxNjA2Yy4xNzg4LS4xNzg4My41MTA5LS4xNzg4My42ODk3IDAgLjE3ODkuMTc4ODMuMTc4OS41MTA5NSAwIC42ODk3OGwtMi4yNzM3IDIuMjQ4MTljLS4wNzY2LjEwMjItLjIwNDQuMTUzMy0uMzMyMTEuMTUzM3oiIGZpbGw9IiM5MzY0ZWQiLz48L3N2Zz4=" />
            <p className="uqGaU">Licensed by IRDAI</p>
          </div>
          <div className="fpSdKe"></div>
          <div className="kuUxhF">
            <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMjQgMTYiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJtLjUgMGgyM3YxNmgtMjN6Ii8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGQ9Im0xNC45NTMxIDE2LjAwMDJoLTYuMjM0MzV2LTcuNDAxMzVjMC0xLjc0MTUgMS40MjE4NS0zLjE1NjQ3IDMuMTcxODUtMy4xNTY0N3MzLjE3MTkgMS40MTQ5NyAzLjE3MTkgMy4xNTY0N3Y3LjQwMTM1eiIgZmlsbD0iI2Y3NTI3NiIvPjxwYXRoIGQ9Im03Ljg0Mzc1IDE1Ljk5ODFoLTYuMzQzNzV2LTUuMjI0NWMwLTEuNzQxNDUgMS40MjE4OC0zLjE1NjQxIDMuMTcxODgtMy4xNTY0MXMzLjE3MTg3IDEuNDE0OTYgMy4xNzE4NyAzLjE1NjQxeiIgZmlsbD0iIzE2YzJmOCIvPjxwYXRoIGQ9Im0yMi41IDE2LjAwMDFoLTYuMzQzOHYtNC4wMjcyYzAtMS43NDE1IDEuNDIxOS0zLjE1NjQ5IDMuMTcxOS0zLjE1NjQ5czMuMTcxOSAxLjQxNDk5IDMuMTcxOSAzLjE1NjQ5eiIgZmlsbD0iI2YyYWEwMCIvPjxwYXRoIGQ9Im0xOS4zMjgxIDcuMTgzOTljMS4wODczIDAgMS45Njg4LS44NzcxNSAxLjk2ODgtMS45NTkxOHMtLjg4MTUtMS45NTkxOS0xLjk2ODgtMS45NTkxOS0xLjk2ODcuODc3MTYtMS45Njg3IDEuOTU5MTkuODgxNCAxLjk1OTE4IDEuOTY4NyAxLjk1OTE4eiIgZmlsbD0iI2YyYWEwMCIvPjxwYXRoIGQ9Im0xMS44OTA2IDMuOTE4MzdjMS4wODczIDAgMS45Njg4LS44NzcxNiAxLjk2ODgtMS45NTkxOSAwLTEuMDgyMDI0LS44ODE1LTEuOTU5MTgtMS45Njg4LTEuOTU5MThzLTEuOTY4NzIuODc3MTU2LTEuOTY4NzIgMS45NTkxOGMwIDEuMDgyMDMuODgxNDIgMS45NTkxOSAxLjk2ODcyIDEuOTU5MTl6IiBmaWxsPSIjZjc1Mjc2Ii8+PHBhdGggZD0ibTQuNjcxODggNi4zMTI5YzEuMDg3MzEgMCAxLjk2ODc0LS44NzcxNiAxLjk2ODc0LTEuOTU5MTkgMC0xLjA4MjAyLS44ODE0My0xLjk1OTE4LTEuOTY4NzQtMS45NTkxOC0xLjA4NzMyIDAtMS45Njg3Ni44NzcxNi0xLjk2ODc2IDEuOTU5MTggMCAxLjA4MjAzLjg4MTQ0IDEuOTU5MTkgMS45Njg3NiAxLjk1OTE5eiIgZmlsbD0iIzE2YzJmOCIvPjwvZz48L3N2Zz4=" />
            <p className="uqGaU">6.2 Crore users</p>
          </div>
          <div className="fpSdKe"></div>
          <div className="gAmjmp">
            <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiB2aWV3Qm94PSIwIDAgMzMgMTQiIHdpZHRoPSIzMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJtLjUgMGgzMS42MzM2djE0aC0zMS42MzM2eiIvPjwvY2xpcFBhdGg+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJtMy40OTIxOSA4LjQ0MTQxLS40MjczIDEuODE5ODloLTEuODE2OGMtLjQyNzQ3OS0uOTYxODYtLjc0ODA5LTIuMDMwNTYtLjc0ODA5LTMuMzEzMDEgMC0xLjE3NTU3LjMyMDYxMS0yLjI0NDI3Ljc0ODA5LTMuMjA2MWwxLjYwMzA2LjMyMDYxLjYzMzIzIDEuNDg0MDhjLS4xMDY4OC40Mjc0OC0uMjA1NzUuOTczOTMtLjIwNTc1IDEuNDAxNDEgMCAuNTM0MzYuMDM3NzggMS4wMTY1NS4yMTM1NiAxLjQ5MzEyeiIgZmlsbD0iI2ZiYmIwMCIvPjxwYXRoIGQ9Im0xNC4wNjI5IDUuNzgxMjVjLjEwNjkuNDI3NDguMTA2OS44NTQ5Ni4xMDY5IDEuMjgyNDQgMCAuNTM0MzUgMCAuOTYxODMtLjEwNjkgMS40OTYxOS0uMzIwNiAxLjYwMzAyLTEuMDkzIDIuOTc4MzItMi4zNzU0IDMuOTQwMTJsLTIuMTEzMTUtLjA5MjgtLjMyMDYxLTEuNzA5OWMuODU0OTYtLjQyNzUgMS40OTYxNi0xLjE3NTU5IDEuODE2NzYtMi4xMzc0MmgtMy43NDA0MnYtMi43Nzg2M2gzLjc0MDQyeiIgZmlsbD0iIzUxOGVmOCIvPjxwYXRoIGQ9Im0xMS44MjgyIDEyLjM5NTZjLTEuMTc1Ni45NjE4LTIuNjcxNzYgMS40OTYyLTQuMzgxNjggMS40OTYyLTIuNjcxNzYgMC01LjAyMjktMS40OTYyLTYuMTk4NDctMy42MzM2bDIuMjQ0MjctMS44MTY3OWMuNjQxMjIgMS42MDMwOSAyLjEzNzQxIDIuNjcxNzkgMy44NDczMyAyLjY3MTc5Ljc0ODA5IDAgMS40OTYxOC0uMjEzOCAyLjEzNzQtLjUzNDR6IiBmaWxsPSIjMjhiNDQ2Ii8+PHBhdGggZD0ibTExLjkzNTEgMS42MDMwNS0yLjI0NDMxIDEuODE2OGMtLjY0MTIyLS4zMjA2MS0xLjM4OTMxLS42NDEyMi0yLjI0NDI3LS42NDEyMi0xLjgxNjc5IDAtMy40MTk4NSAxLjE3NTU3LTMuOTU0MiAyLjc3ODYybC0yLjI0NDI3LTEuODE2NzljMS4xNzU1Ny0yLjI0NDI4IDMuNTI2NzEtMy43NDA0NiA2LjE5ODQ3LTMuNzQwNDYgMS43MDk5MiAwIDMuMzEyOTguNjQxMjIxIDQuNDg4NTggMS42MDMwNXoiIGZpbGw9IiNmMTQzMzYiLz48cGF0aCBkPSJtMzIuMTMyOCA2Ljk0NjU2YzAtMy44NDczMi0zLjIwNjEtNi45NDY1Ni03LjA1MzQtNi45NDY1Ni0zLjg0NzQgMC02Ljk0NjYgMy4wOTkyNC02Ljk0NjYgNi45NDY1NiAwIDMuNTI2NzQgMi41NjQ5IDYuNDEyMjQgNS44Nzc5IDYuOTQ2NTR2LTQuOTE2aC0xLjgxNjh2LTIuMDMwNTRoMS44MTY4di0xLjQ5NjE4YzAtMS43MDk5MiAxLjA2ODctMi42NzE3NSAyLjY3MTctMi42NzE3NS43NDgxIDAgMS42MDMxLjEwNjg3IDEuNjAzMS4xMDY4N3YxLjcwOTkyaC0uODU1Yy0uODU0OSAwLTEuMTc1Ni41MzQzNS0xLjE3NTYgMS4wNjg3djEuMjgyNDRoMS45MjM3bC0uMzIwNiAyLjAzMDU0aC0xLjYwMzF2NC45MTZjMy4zMTMtLjUzNDMgNS44Nzc5LTMuNDE5OCA1Ljg3NzktNi45NDY1NHoiIGZpbGw9IiMxODc3ZjIiLz48cGF0aCBkPSJtMjcuODU5NCA4Ljk3NTgyLjMyMDYtMi4wMzA1NGgtMS45MTc3di0xLjI4MjQ0YzAtLjUzNDM1LjMyMDYtMS4wNjg3IDEuMTc1Ni0xLjA2ODdoLjg2MnYtMS43MDk5M3MtLjg2NzktLjEwNjg3LTEuNzIyOS0uMTA2ODdjLTEuNDk2MiAwLTIuNTY0OS45NjE4NC0yLjU2NDkgMi42NzE3NnYxLjQ5NjE4aC0xLjgxNjh2Mi4wMzA1NGgxLjgxNjh2NC45MTU5OGMuMzM5MS4wNDgyLjc0ODEuMTA2OSAxLjA2ODcuMTA2OXMuODE2LS4wMjM5IDEuMTc1Mi0uMTA2OXYtNC45MTU5OHoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+" />
            <p className="uqGaU">
              <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjExIiB2aWV3Qm94PSIwIDAgMTIgMTEiIHdpZHRoPSIxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNS40NDE1Mi45MjcwNDljLjI5OTM1LS45MjEzMTA3NCAxLjYwMjc2LS45MjEzMDkwNyAxLjkwMjExLjAwMDAwMmwuNjIwNTUgMS45MDk4MjljLjEzMzg3LjQxMjAyLjUxNzgzLjY5MDk4Ljk1MTA1LjY5MDk4aDIuMDA4MDdjLjk2ODggMCAxLjM3MTUgMS4yMzk2Mi41ODc4IDEuODA5MDJsLTEuNjI0NTcgMS4xODAzNGMtLjM1MDQ4LjI1NDY1LS40OTcxNC43MDYwMS0uMzYzMjcgMS4xMTgwM2wuNjIwNTQgMS45MDk4M2MuMjk5NC45MjEzMi0uNzU1MTMgMS42ODc0Mi0xLjUzODg0IDEuMTE4MDJsLTEuNjI0Ni0xLjE4MDMyYy0uMzUwNDgtLjI1NDY1LS44MjUwOC0uMjU0NjQtMS4xNzU1NyAwbC0xLjYyNDYgMS4xODAzMmMtLjc4MzcxLjU2OTQtMS44MzgxOS0uMTk2Ny0xLjUzODg0LTEuMTE4MDJsLjYyMDU0LTEuOTA5ODJjLjEzMzg4LS40MTIwMy0uMDEyNzgtLjg2MzQtLjM2MzI3LTEuMTE4MDRsLTEuNjI0Ni0xLjE4MDM0Yy0uNzgzNzExLS41Njk0LS4zODA5MzQtMS44MDkwMi41ODc3OS0xLjgwOTAyaDIuMDA4MTFjLjQzMzIzIDAgLjgxNzE5LS4yNzg5Ni45NTEwNi0uNjkwOTh6IiBmaWxsPSIjZmZhNTJmIi8+PC9zdmc+" />{" "}
              Ratings
            </p>
          </div>
        </div>
      </div>

      <div className="ckahcs">
        <div className="bQGPOW ">
          <div className="hUtAMV">
            <div className="kidaDn">
              <div>
                <div className="star">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgODcgMTYiIHdpZHRoPSI4NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmY5MTAwIj48cGF0aCBkPSJtNi44NTcxNyAxLjczMTM1Yy4zNzE5OC0uNzI0MDQgMS40MDY5OS0uNzI0MDQgMS43Nzg5NyAwbDEuMjEwOTIgMi4zNTcwNGMuMTQ1MjEuMjgyNjMuNDE2MDQuNDc5NDMuNzI5NzQuNTMwMTlsMi42MTU5LjQyMzNjLjgwMzUuMTMwMDMgMS4xMjM0IDEuMTE0MzguNTQ5NyAxLjY5MTg5bC0xLjg2NzUgMS44ODAwM2MtLjIyMzkuMjI1NDMtLjMyNzQuNTQzODYtLjI3ODcuODU3ODZsLjQwNTggMi42MTg2NGMuMTI0Ni44MDQ0LS43MTI3IDEuNDEyOC0xLjQzOTIgMS4wNDU3bC0yLjM2NTE0LTEuMTk1MmMtLjI4MzU5LS4xNDMzLS42MTg0Mi0uMTQzMy0uOTAyMDEgMGwtMi4zNjUwOSAxLjE5NTJjLS43MjY1Mi4zNjcxLTEuNTYzODYtLjI0MTMtMS40MzkyMi0xLjA0NTdsLjQwNTc3LTIuNjE4NjRjLjA0ODY2LS4zMTQtLjA1NDgxLS42MzI0My0uMjc4NzMtLjg1Nzg2bC0xLjg2NzQ4LTEuODgwMDNjLS41NzM2Ni0uNTc3NTEtLjI1MzgyLTEuNTYxODYuNTQ5NzMtMS42OTE4OWwyLjYxNTg3LS40MjMzYy4zMTM2Ny0uMDUwNzYuNTg0NTQtLjI0NzU2LjcyOTc0LS41MzAxOXoiLz48cGF0aCBkPSJtMjQuNzM0MiAxLjczMTM1Yy4zNzItLjcyNDA0IDEuNDA3LS43MjQwNCAxLjc3OSAwbDEuMjEwOSAyLjM1NzA0Yy4xNDUyLjI4MjYzLjQxNjEuNDc5NDMuNzI5OC41MzAxOWwyLjYxNTkuNDIzM2MuODAzNS4xMzAwMyAxLjEyMzMgMS4xMTQzOC41NDk3IDEuNjkxODlsLTEuODY3NSAxLjg4MDAzYy0uMjIzOS4yMjU0My0uMzI3NC41NDM4Ni0uMjc4Ny44NTc4NmwuNDA1NyAyLjYxODY0Yy4xMjQ3LjgwNDQtLjcxMjcgMS40MTI4LTEuNDM5MiAxLjA0NTdsLTIuMzY1MS0xLjE5NTJjLS4yODM2LS4xNDMzLS42MTg0LS4xNDMzLS45MDIgMGwtMi4zNjUxIDEuMTk1MmMtLjcyNjUuMzY3MS0xLjU2MzgtLjI0MTMtMS40MzkyLTEuMDQ1N2wuNDA1OC0yLjYxODY0Yy4wNDg2LS4zMTQtLjA1NDgtLjYzMjQzLS4yNzg3LS44NTc4NmwtMS44Njc1LTEuODgwMDNjLS41NzM3LS41Nzc1MS0uMjUzOC0xLjU2MTg2LjU0OTctMS42OTE4OWwyLjYxNTktLjQyMzNjLjMxMzYtLjA1MDc2LjU4NDUtLjI0NzU2LjcyOTctLjUzMDE5eiIvPjxwYXRoIGQ9Im00Mi42MTEyIDEuNzMxMzVjLjM3Mi0uNzI0MDQgMS40MDctLjcyNDA0IDEuNzc5IDBsMS4yMTA5IDIuMzU3MDRjLjE0NTIuMjgyNjMuNDE2MS40Nzk0My43Mjk3LjUzMDE5bDIuNjE1OS40MjMzYy44MDM2LjEzMDAzIDEuMTIzNCAxLjExNDM4LjU0OTcgMS42OTE4OWwtMS44Njc0IDEuODgwMDNjLS4yMjQuMjI1NDMtLjMyNzQuNTQzODYtLjI3ODguODU3ODZsLjQwNTggMi42MTg2NGMuMTI0Ni44MDQ0LS43MTI3IDEuNDEyOC0xLjQzOTIgMS4wNDU3bC0yLjM2NTEtMS4xOTUyYy0uMjgzNi0uMTQzMy0uNjE4NC0uMTQzMy0uOTAyIDBsLTIuMzY1MSAxLjE5NTJjLS43MjY1LjM2NzEtMS41NjM5LS4yNDEzLTEuNDM5Mi0xLjA0NTdsLjQwNTctMi42MTg2NGMuMDQ4Ny0uMzE0LS4wNTQ4LS42MzI0My0uMjc4Ny0uODU3ODZsLTEuODY3NS0xLjg4MDAzYy0uNTczNi0uNTc3NTEtLjI1MzgtMS41NjE4Ni41NDk4LTEuNjkxODlsMi42MTU4LS40MjMzYy4zMTM3LS4wNTA3Ni41ODQ2LS4yNDc1Ni43Mjk4LS41MzAxOXoiLz48cGF0aCBkPSJtNjAuNDg3MiAxLjczMTM1Yy4zNzItLjcyNDA0IDEuNDA3LS43MjQwNCAxLjc3ODkgMGwxLjIxMSAyLjM1NzA0Yy4xNDUyLjI4MjYzLjQxNi40Nzk0My43Mjk3LjUzMDE5bDIuNjE1OS40MjMzYy44MDM1LjEzMDAzIDEuMTIzNCAxLjExNDM4LjU0OTcgMS42OTE4OWwtMS44Njc1IDEuODgwMDNjLS4yMjM5LjIyNTQzLS4zMjc0LjU0Mzg2LS4yNzg3Ljg1Nzg2bC40MDU4IDIuNjE4NjRjLjEyNDYuODA0NC0uNzEyNyAxLjQxMjgtMS40MzkyIDEuMDQ1N2wtMi4zNjUxLTEuMTk1MmMtLjI4MzYtLjE0MzMtLjYxODUtLjE0MzMtLjkwMiAwbC0yLjM2NTEgMS4xOTUyYy0uNzI2Ni4zNjcxLTEuNTYzOS0uMjQxMy0xLjQzOTMtMS4wNDU3bC40MDU4LTIuNjE4NjRjLjA0ODctLjMxNC0uMDU0OC0uNjMyNDMtLjI3ODctLjg1Nzg2bC0xLjg2NzUtMS44ODAwM2MtLjU3MzctLjU3NzUxLS4yNTM4LTEuNTYxODYuNTQ5Ny0xLjY5MTg5bDIuNjE1OS0uNDIzM2MuMzEzNy0uMDUwNzYuNTg0NS0uMjQ3NTYuNzI5Ny0uNTMwMTl6Ii8+PHBhdGggZD0ibTc4LjM2MzkgMS43MzEzNWMuMzcyLS43MjQwNCAxLjQwNy0uNzI0MDQgMS43Nzg5IDBsMS4yMTEgMi4zNTcwNGMuMTQ1Mi4yODI2My40MTYxLjQ3OTQzLjcyOTcuNTMwMTlsMi42MTU5LjQyMzNjLjgwMzUuMTMwMDMgMS4xMjM0IDEuMTE0MzguNTQ5NyAxLjY5MTg5bC0xLjg2NzUgMS44ODAwM2MtLjIyMzkuMjI1NDMtLjMyNzMuNTQzODYtLjI3ODcuODU3ODZsLjQwNTggMi42MTg2NGMuMTI0Ni44MDQ0LS43MTI3IDEuNDEyOC0xLjQzOTIgMS4wNDU3bC0yLjM2NTEtMS4xOTUyYy0uMjgzNi0uMTQzMy0uNjE4NC0uMTQzMy0uOTAyIDBsLTIuMzY1MSAxLjE5NTJjLS43MjY1LjM2NzEtMS41NjM5LS4yNDEzLTEuNDM5Mi0xLjA0NTdsLjQwNTctMi42MTg2NGMuMDQ4Ny0uMzE0LS4wNTQ4LS42MzI0My0uMjc4Ny0uODU3ODZsLTEuODY3NS0xLjg4MDAzYy0uNTczNi0uNTc3NTEtLjI1MzgtMS41NjE4Ni41NDk3LTEuNjkxODlsMi42MTU5LS40MjMzYy4zMTM3LS4wNTA3Ni41ODQ2LS4yNDc1Ni43Mjk4LS41MzAxOXoiLz48L2c+PC9zdmc+"
                    style={{  marginTop: "20px" }}
                  />
                  <p className="fLeYps">
                    Very good experience. Got the settlement
                  </p>
                  <p
                    className="fLeYps"
                    style={{ marginTop: "-23px" }}
                  >
                    {" "}
                    done in less than 24 hours.
                  </p>
                  <div className="eOOknb ">
                    <div className="ecoHO">
                      <div className="ecostyle">
                        <div className="border">
                          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" />
                        </div>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAACAVBMVEXdfzOPQxu3n3rkhTjPtqXMcDOXUiXggjfihTegdVflhTjkhDbmhjjmhzoeI0DniT0HCxwXHDcOEykQGTXdfS0SGDANFS6dbEnhfjYJDyThfCy2hmQUGTPfeDM2PGAnMVQ3QWggLFDegzfSuKVeOioEBxMRHDoaIDoWHz4dITwCAwsrNVkvPGY0OVzEpY8yNlRQMyiRUiSRWS6rbEPIsJ/Nj2HjgzoNDiEyP2sbHDDdfjXCnoehXCa4kW3bgzmWY0ogEAybblIyJSDEkG8oNmF6Iy4hKUsgKEU5QGU2RHA2NkzSt6efWB4IBgZKMCrIrZYkMEagcE7WczC9h2ano6qNb11yPB18WFRkSkJ9d3WxdlOpbFWmclDTw7hvRTHEhGfTfDbn2dR6SzKWYj7VmXjQtqKNQxrcgjUoHBd7RSMQFRYuDxm+gFMZJUk6IjdSHi4mJjhWSlnKdz9ALCfDayzag1DImHqKTB3Vn4dfMRdoZHfmr5vdp49EPUuAVUOoZzDPjniaRhfPu62SY0d3QzjsuaKcSxq1cWPFgYXeoIOzcEOkfmFpNRq3ZStKFyCfYjo+SG5GNUiFPxZxGyPnlmc5KS5pX150fJlxMTewP0jCyNDjjVAqQVPOczm1r7PTxsDNw7haMBqifWw7Gwyve2CASDicbVuqQUywtbyNWESWn6dVnDzQAAAACnRSTlOfn5+fn5+fn5+fg2/kAwAAAj1JREFUGBkFwU1Ik2EAwPH/+7z70rml6HQ63fBjNm2oUNYqFNQWUSF1sENejFDwFl7qUpdOgX1c6lQQCGEQQUpgmRaYmiTkQdvWSssPXGZutjlxbs/b7yey9IDRZFJNRiMAGHW6LIMixNVG+9Hs+jrVpDpu9/bePVFQ0OVq8HV1nxTgDOkD8wodYiQUGK4HWiGWaRczACA1eYpqi2W1DKA1Z2RQsBgCVLy22JF0IuDoIwA/o5wXAFLTqB1bOeB2+lJfYdzxhQoESFAkNvfZ3XBip3QCPDDFmLDqMxKAyvjyh82lZz4DwSUAAV6BBi41Lx0vdfKUVdBYzBWHmZeAYlT+6Xvd2w4AwIeYxIsmFa5FgmpY54ob8Hssp/mEiIMG0NF8cc/LVCeMAhAT5SwrUoCz/3qE8tqByyl+dy41t+yIwkZQem70var3FVcMp42P66xuQ6VuRxFlcLMnOD0U27W+z1wwLGfNrb174klnaQIcjwJrazJXT/+MILOnptPf7m/SIcLnqjxnZBRZxa9IjFzbXlER3TKEYKFk5YGD7fjDJlrehiIcB27Z2RdtxcGkXQH4nrffJFmfltKgKiC0aNCdiALZyRdDgxtcOeaPZbA3rInX4+YwWC1m85uami0OuaoXyskM/PGKtoRj256jJRLr8dGXOwTvzc6FVPInPoo7Gvk1JDhIMmLeEyInhG1X/WsrEzXJGf3sD6KfSzBvoMktmw1byrD5XEwWlhReot2XSajJwkyalF7v9+Mk9R/UnOCV0nVeEQAAAABJRU5ErkJggg=="
                          className="imgsty"
                        />
                      </div>
                    </div>
                  </div>
                  <p
                    className="ghYKa"
                    style={{ marginTop: "-29px",marginLeft: "35px" }}
                  >
                    Rahul Gupta
                  </p>
                  <p className="jwbdFp"  style={{marginLeft: "35px" }}>Delhi</p>
                </div>
              </div>
              <div>
                <div style={{ marginLeft: "400px", marginTop: "-150px" }}>
                  <div className="star">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgODcgMTYiIHdpZHRoPSI4NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmY5MTAwIj48cGF0aCBkPSJtNi44NTcxNyAxLjczMTM1Yy4zNzE5OC0uNzI0MDQgMS40MDY5OS0uNzI0MDQgMS43Nzg5NyAwbDEuMjEwOTIgMi4zNTcwNGMuMTQ1MjEuMjgyNjMuNDE2MDQuNDc5NDMuNzI5NzQuNTMwMTlsMi42MTU5LjQyMzNjLjgwMzUuMTMwMDMgMS4xMjM0IDEuMTE0MzguNTQ5NyAxLjY5MTg5bC0xLjg2NzUgMS44ODAwM2MtLjIyMzkuMjI1NDMtLjMyNzQuNTQzODYtLjI3ODcuODU3ODZsLjQwNTggMi42MTg2NGMuMTI0Ni44MDQ0LS43MTI3IDEuNDEyOC0xLjQzOTIgMS4wNDU3bC0yLjM2NTE0LTEuMTk1MmMtLjI4MzU5LS4xNDMzLS42MTg0Mi0uMTQzMy0uOTAyMDEgMGwtMi4zNjUwOSAxLjE5NTJjLS43MjY1Mi4zNjcxLTEuNTYzODYtLjI0MTMtMS40MzkyMi0xLjA0NTdsLjQwNTc3LTIuNjE4NjRjLjA0ODY2LS4zMTQtLjA1NDgxLS42MzI0My0uMjc4NzMtLjg1Nzg2bC0xLjg2NzQ4LTEuODgwMDNjLS41NzM2Ni0uNTc3NTEtLjI1MzgyLTEuNTYxODYuNTQ5NzMtMS42OTE4OWwyLjYxNTg3LS40MjMzYy4zMTM2Ny0uMDUwNzYuNTg0NTQtLjI0NzU2LjcyOTc0LS41MzAxOXoiLz48cGF0aCBkPSJtMjQuNzM0MiAxLjczMTM1Yy4zNzItLjcyNDA0IDEuNDA3LS43MjQwNCAxLjc3OSAwbDEuMjEwOSAyLjM1NzA0Yy4xNDUyLjI4MjYzLjQxNjEuNDc5NDMuNzI5OC41MzAxOWwyLjYxNTkuNDIzM2MuODAzNS4xMzAwMyAxLjEyMzMgMS4xMTQzOC41NDk3IDEuNjkxODlsLTEuODY3NSAxLjg4MDAzYy0uMjIzOS4yMjU0My0uMzI3NC41NDM4Ni0uMjc4Ny44NTc4NmwuNDA1NyAyLjYxODY0Yy4xMjQ3LjgwNDQtLjcxMjcgMS40MTI4LTEuNDM5MiAxLjA0NTdsLTIuMzY1MS0xLjE5NTJjLS4yODM2LS4xNDMzLS42MTg0LS4xNDMzLS45MDIgMGwtMi4zNjUxIDEuMTk1MmMtLjcyNjUuMzY3MS0xLjU2MzgtLjI0MTMtMS40MzkyLTEuMDQ1N2wuNDA1OC0yLjYxODY0Yy4wNDg2LS4zMTQtLjA1NDgtLjYzMjQzLS4yNzg3LS44NTc4NmwtMS44Njc1LTEuODgwMDNjLS41NzM3LS41Nzc1MS0uMjUzOC0xLjU2MTg2LjU0OTctMS42OTE4OWwyLjYxNTktLjQyMzNjLjMxMzYtLjA1MDc2LjU4NDUtLjI0NzU2LjcyOTctLjUzMDE5eiIvPjxwYXRoIGQ9Im00Mi42MTEyIDEuNzMxMzVjLjM3Mi0uNzI0MDQgMS40MDctLjcyNDA0IDEuNzc5IDBsMS4yMTA5IDIuMzU3MDRjLjE0NTIuMjgyNjMuNDE2MS40Nzk0My43Mjk3LjUzMDE5bDIuNjE1OS40MjMzYy44MDM2LjEzMDAzIDEuMTIzNCAxLjExNDM4LjU0OTcgMS42OTE4OWwtMS44Njc0IDEuODgwMDNjLS4yMjQuMjI1NDMtLjMyNzQuNTQzODYtLjI3ODguODU3ODZsLjQwNTggMi42MTg2NGMuMTI0Ni44MDQ0LS43MTI3IDEuNDEyOC0xLjQzOTIgMS4wNDU3bC0yLjM2NTEtMS4xOTUyYy0uMjgzNi0uMTQzMy0uNjE4NC0uMTQzMy0uOTAyIDBsLTIuMzY1MSAxLjE5NTJjLS43MjY1LjM2NzEtMS41NjM5LS4yNDEzLTEuNDM5Mi0xLjA0NTdsLjQwNTctMi42MTg2NGMuMDQ4Ny0uMzE0LS4wNTQ4LS42MzI0My0uMjc4Ny0uODU3ODZsLTEuODY3NS0xLjg4MDAzYy0uNTczNi0uNTc3NTEtLjI1MzgtMS41NjE4Ni41NDk4LTEuNjkxODlsMi42MTU4LS40MjMzYy4zMTM3LS4wNTA3Ni41ODQ2LS4yNDc1Ni43Mjk4LS41MzAxOXoiLz48cGF0aCBkPSJtNjAuNDg3MiAxLjczMTM1Yy4zNzItLjcyNDA0IDEuNDA3LS43MjQwNCAxLjc3ODkgMGwxLjIxMSAyLjM1NzA0Yy4xNDUyLjI4MjYzLjQxNi40Nzk0My43Mjk3LjUzMDE5bDIuNjE1OS40MjMzYy44MDM1LjEzMDAzIDEuMTIzNCAxLjExNDM4LjU0OTcgMS42OTE4OWwtMS44Njc1IDEuODgwMDNjLS4yMjM5LjIyNTQzLS4zMjc0LjU0Mzg2LS4yNzg3Ljg1Nzg2bC40MDU4IDIuNjE4NjRjLjEyNDYuODA0NC0uNzEyNyAxLjQxMjgtMS40MzkyIDEuMDQ1N2wtMi4zNjUxLTEuMTk1MmMtLjI4MzYtLjE0MzMtLjYxODUtLjE0MzMtLjkwMiAwbC0yLjM2NTEgMS4xOTUyYy0uNzI2Ni4zNjcxLTEuNTYzOS0uMjQxMy0xLjQzOTMtMS4wNDU3bC40MDU4LTIuNjE4NjRjLjA0ODctLjMxNC0uMDU0OC0uNjMyNDMtLjI3ODctLjg1Nzg2bC0xLjg2NzUtMS44ODAwM2MtLjU3MzctLjU3NzUxLS4yNTM4LTEuNTYxODYuNTQ5Ny0xLjY5MTg5bDIuNjE1OS0uNDIzM2MuMzEzNy0uMDUwNzYuNTg0NS0uMjQ3NTYuNzI5Ny0uNTMwMTl6Ii8+PHBhdGggZD0ibTc4LjM2MzkgMS43MzEzNWMuMzcyLS43MjQwNCAxLjQwNy0uNzI0MDQgMS43Nzg5IDBsMS4yMTEgMi4zNTcwNGMuMTQ1Mi4yODI2My40MTYxLjQ3OTQzLjcyOTcuNTMwMTlsMi42MTU5LjQyMzNjLjgwMzUuMTMwMDMgMS4xMjM0IDEuMTE0MzguNTQ5NyAxLjY5MTg5bC0xLjg2NzUgMS44ODAwM2MtLjIyMzkuMjI1NDMtLjMyNzMuNTQzODYtLjI3ODcuODU3ODZsLjQwNTggMi42MTg2NGMuMTI0Ni44MDQ0LS43MTI3IDEuNDEyOC0xLjQzOTIgMS4wNDU3bC0yLjM2NTEtMS4xOTUyYy0uMjgzNi0uMTQzMy0uNjE4NC0uMTQzMy0uOTAyIDBsLTIuMzY1MSAxLjE5NTJjLS43MjY1LjM2NzEtMS41NjM5LS4yNDEzLTEuNDM5Mi0xLjA0NTdsLjQwNTctMi42MTg2NGMuMDQ4Ny0uMzE0LS4wNTQ4LS42MzI0My0uMjc4Ny0uODU3ODZsLTEuODY3NS0xLjg4MDAzYy0uNTczNi0uNTc3NTEtLjI1MzgtMS41NjE4Ni41NDk3LTEuNjkxODlsMi42MTU5LS40MjMzYy4zMTM3LS4wNTA3Ni41ODQ2LS4yNDc1Ni43Mjk4LS41MzAxOXoiLz48L2c+PC9zdmc+"
                      style={{ marginTop: "20px" }}
                    />
                    <p className="fLeYps">
                      Thank you so much for the amazing service,
                    </p>
                    <p
                      className="fLeYps"
                      style={{ marginTop: "-23px", marginLeft: "0px" }}
                    >
                      {" "}
                      Special thanks to Mr. Rais Shaikh.
                    </p>
                    <div className="eOOknb ">
                      <div className="ecoHO">
                        <div className="ecostyle">
                          <div className="border">
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" />
                          </div>
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAB8lBMVEVXMl6GlqRsW0e9yNBFKE09I0d9a1BdOGJ4aE3E0teAcFXczMTYx8Dg0slRLVa4xc5EQ1ZNPzZXZW7l29FJOEHp39dlPWvBztG2xsyvnI2YpK+1xMhDKkhoYnZXZn5yf4lpeI6Of3JWQzmAeHhlU2u6wsW2wsO8y9G5xMdAJ0a5wcS8x83d3OKCZFjCzNNNLlPb3ObFz9VGKEy/zdS1vsC7xMlcOGJgOmNhUEtfPmdsWVCyv8dUMlm0vL03JDxZNF3Y2uTF1du4vsGxubxmRGuaf3OntLwwHTbD0dfN2+NLLkzI0tldX2dQM1eSb2G/yNCHeWiLeWx1W09yaF0pLzShrrmfrLWBdF89LUF0Ylm3w8g8I0RCOTWwsbFHMU5YOF6dpqtoUEdaTUeUdmmEbWPg4OmiiXywvMBiRWiKlpnT2N7P0dhWTlhSPjkhJSqmo6OKbV1aSkOaeWlUPViWn6OHalyXxLaorK+zsLu5x86ViZQvOkaajIVXQU8rIzCsuLzJx9AzJTdrU3JGTlJ+fod8a1s4PkFERki/0NOhxb1maHGdyr+omZJyYHtyXGDn4+JvgYvg2dvY1NZ1aWVUYnrQzc7W5u/s9/lPWmRvhppdtpZcg6F9i5eRh3dkuJ2NdHuwlIe80MjG1M5uvKTGwcpuXnKY3OJDAAAAJXRSTlO/39/fv7/fv9/f39/f37/f3/Hf39/fv9/f39/fn9/f39/fr7+/aJ8YyQAAAjtJREFUGBkFwUlPEwEYgOF3Zr7SFjptKVQ2URFaxaBEDGBivEj0oESN4sHEs4m/w6OJ8U94MS4xmLhEDngQaJFYBUG2OmDH1mnBUtrSdXweUR+umPT9SAGoGlpn6Y7yOGyyInxLl/nC4d8qAMAk7aZa8UoDZYp4k1Kvj22POvNzQLETc0/AgWNvG7RwwLIIDnxoce5NvPcj9RIkQePeV8Nl75pciJ/ddDkuzQokq1JBz2ndrf/ehbqUUxGj28OkT1CQChTGX3fk4yMRX2Vnn+wzA0tUuzHroNIYilPviQ8oQTCuJQ0QtIFIRfOjkkic191kD2EZZU4mRZUafgrE+2utBZ/tn2uUYWf0FvPClUdaJ8QDqzefHpm/rDFddWddLx8UxbfboG3R2R1LejyR0HqQPtlIVLGQnGM06ifPsaPJi9d3nx+/G0nVqh7XT12A4SiwNJhZsk7kpux0vuTc7w29ENvfHAzHP0NVzRR3QyY9iVzWYXcgLJ2uVJVqK/qOwSL9tZnakOlHfKIOmJkWm/TEvN6+Bh7rdnR7hE9TXiGzPgOM6xgjVf7GwFfbSIAqDcwwUXa9cZ3RVQYjYI71Lt+IKoao6v3A5g5tzZvnZh3T3WlYjhG7qngFRUu9bYKuYMGRBKs9m20oD1vBJqlr29NN+SZi4Y/ozUbXFjoZom5NvH/U1oTksDf8FFPuwJ53C/fi0EJOcm2BVyO/DtQaHCh2cZWURv/CAiLeJ4qx1liCEk5ftgTegvIdm/b/JuP2q3wH3usAAAAASUVORK5CYII="
                            className="imgsty"
                          />
                        </div>
                      </div>
                    </div>
                    <p
                      className="ghYKa"
                      style={{ marginLeft: "40px", marginTop: "-29px" }}
                    >
                      Somnath Mane
                    </p>
                    <p className="jwbdFp" style={{ marginLeft: "40px" }}>
                      Pune
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ marginLeft: "800px", marginTop: "-150px" }}>
                <div className="star">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgODcgMTYiIHdpZHRoPSI4NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmY5MTAwIj48cGF0aCBkPSJtNi44NTcxNyAxLjczMTM1Yy4zNzE5OC0uNzI0MDQgMS40MDY5OS0uNzI0MDQgMS43Nzg5NyAwbDEuMjEwOTIgMi4zNTcwNGMuMTQ1MjEuMjgyNjMuNDE2MDQuNDc5NDMuNzI5NzQuNTMwMTlsMi42MTU5LjQyMzNjLjgwMzUuMTMwMDMgMS4xMjM0IDEuMTE0MzguNTQ5NyAxLjY5MTg5bC0xLjg2NzUgMS44ODAwM2MtLjIyMzkuMjI1NDMtLjMyNzQuNTQzODYtLjI3ODcuODU3ODZsLjQwNTggMi42MTg2NGMuMTI0Ni44MDQ0LS43MTI3IDEuNDEyOC0xLjQzOTIgMS4wNDU3bC0yLjM2NTE0LTEuMTk1MmMtLjI4MzU5LS4xNDMzLS42MTg0Mi0uMTQzMy0uOTAyMDEgMGwtMi4zNjUwOSAxLjE5NTJjLS43MjY1Mi4zNjcxLTEuNTYzODYtLjI0MTMtMS40MzkyMi0xLjA0NTdsLjQwNTc3LTIuNjE4NjRjLjA0ODY2LS4zMTQtLjA1NDgxLS42MzI0My0uMjc4NzMtLjg1Nzg2bC0xLjg2NzQ4LTEuODgwMDNjLS41NzM2Ni0uNTc3NTEtLjI1MzgyLTEuNTYxODYuNTQ5NzMtMS42OTE4OWwyLjYxNTg3LS40MjMzYy4zMTM2Ny0uMDUwNzYuNTg0NTQtLjI0NzU2LjcyOTc0LS41MzAxOXoiLz48cGF0aCBkPSJtMjQuNzM0MiAxLjczMTM1Yy4zNzItLjcyNDA0IDEuNDA3LS43MjQwNCAxLjc3OSAwbDEuMjEwOSAyLjM1NzA0Yy4xNDUyLjI4MjYzLjQxNjEuNDc5NDMuNzI5OC41MzAxOWwyLjYxNTkuNDIzM2MuODAzNS4xMzAwMyAxLjEyMzMgMS4xMTQzOC41NDk3IDEuNjkxODlsLTEuODY3NSAxLjg4MDAzYy0uMjIzOS4yMjU0My0uMzI3NC41NDM4Ni0uMjc4Ny44NTc4NmwuNDA1NyAyLjYxODY0Yy4xMjQ3LjgwNDQtLjcxMjcgMS40MTI4LTEuNDM5MiAxLjA0NTdsLTIuMzY1MS0xLjE5NTJjLS4yODM2LS4xNDMzLS42MTg0LS4xNDMzLS45MDIgMGwtMi4zNjUxIDEuMTk1MmMtLjcyNjUuMzY3MS0xLjU2MzgtLjI0MTMtMS40MzkyLTEuMDQ1N2wuNDA1OC0yLjYxODY0Yy4wNDg2LS4zMTQtLjA1NDgtLjYzMjQzLS4yNzg3LS44NTc4NmwtMS44Njc1LTEuODgwMDNjLS41NzM3LS41Nzc1MS0uMjUzOC0xLjU2MTg2LjU0OTctMS42OTE4OWwyLjYxNTktLjQyMzNjLjMxMzYtLjA1MDc2LjU4NDUtLjI0NzU2LjcyOTctLjUzMDE5eiIvPjxwYXRoIGQ9Im00Mi42MTEyIDEuNzMxMzVjLjM3Mi0uNzI0MDQgMS40MDctLjcyNDA0IDEuNzc5IDBsMS4yMTA5IDIuMzU3MDRjLjE0NTIuMjgyNjMuNDE2MS40Nzk0My43Mjk3LjUzMDE5bDIuNjE1OS40MjMzYy44MDM2LjEzMDAzIDEuMTIzNCAxLjExNDM4LjU0OTcgMS42OTE4OWwtMS44Njc0IDEuODgwMDNjLS4yMjQuMjI1NDMtLjMyNzQuNTQzODYtLjI3ODguODU3ODZsLjQwNTggMi42MTg2NGMuMTI0Ni44MDQ0LS43MTI3IDEuNDEyOC0xLjQzOTIgMS4wNDU3bC0yLjM2NTEtMS4xOTUyYy0uMjgzNi0uMTQzMy0uNjE4NC0uMTQzMy0uOTAyIDBsLTIuMzY1MSAxLjE5NTJjLS43MjY1LjM2NzEtMS41NjM5LS4yNDEzLTEuNDM5Mi0xLjA0NTdsLjQwNTctMi42MTg2NGMuMDQ4Ny0uMzE0LS4wNTQ4LS42MzI0My0uMjc4Ny0uODU3ODZsLTEuODY3NS0xLjg4MDAzYy0uNTczNi0uNTc3NTEtLjI1MzgtMS41NjE4Ni41NDk4LTEuNjkxODlsMi42MTU4LS40MjMzYy4zMTM3LS4wNTA3Ni41ODQ2LS4yNDc1Ni43Mjk4LS41MzAxOXoiLz48cGF0aCBkPSJtNjAuNDg3MiAxLjczMTM1Yy4zNzItLjcyNDA0IDEuNDA3LS43MjQwNCAxLjc3ODkgMGwxLjIxMSAyLjM1NzA0Yy4xNDUyLjI4MjYzLjQxNi40Nzk0My43Mjk3LjUzMDE5bDIuNjE1OS40MjMzYy44MDM1LjEzMDAzIDEuMTIzNCAxLjExNDM4LjU0OTcgMS42OTE4OWwtMS44Njc1IDEuODgwMDNjLS4yMjM5LjIyNTQzLS4zMjc0LjU0Mzg2LS4yNzg3Ljg1Nzg2bC40MDU4IDIuNjE4NjRjLjEyNDYuODA0NC0uNzEyNyAxLjQxMjgtMS40MzkyIDEuMDQ1N2wtMi4zNjUxLTEuMTk1MmMtLjI4MzYtLjE0MzMtLjYxODUtLjE0MzMtLjkwMiAwbC0yLjM2NTEgMS4xOTUyYy0uNzI2Ni4zNjcxLTEuNTYzOS0uMjQxMy0xLjQzOTMtMS4wNDU3bC40MDU4LTIuNjE4NjRjLjA0ODctLjMxNC0uMDU0OC0uNjMyNDMtLjI3ODctLjg1Nzg2bC0xLjg2NzUtMS44ODAwM2MtLjU3MzctLjU3NzUxLS4yNTM4LTEuNTYxODYuNTQ5Ny0xLjY5MTg5bDIuNjE1OS0uNDIzM2MuMzEzNy0uMDUwNzYuNTg0NS0uMjQ3NTYuNzI5Ny0uNTMwMTl6Ii8+PHBhdGggZD0ibTc4LjM2MzkgMS43MzEzNWMuMzcyLS43MjQwNCAxLjQwNy0uNzI0MDQgMS43Nzg5IDBsMS4yMTEgMi4zNTcwNGMuMTQ1Mi4yODI2My40MTYxLjQ3OTQzLjcyOTcuNTMwMTlsMi42MTU5LjQyMzNjLjgwMzUuMTMwMDMgMS4xMjM0IDEuMTE0MzguNTQ5NyAxLjY5MTg5bC0xLjg2NzUgMS44ODAwM2MtLjIyMzkuMjI1NDMtLjMyNzMuNTQzODYtLjI3ODcuODU3ODZsLjQwNTggMi42MTg2NGMuMTI0Ni44MDQ0LS43MTI3IDEuNDEyOC0xLjQzOTIgMS4wNDU3bC0yLjM2NTEtMS4xOTUyYy0uMjgzNi0uMTQzMy0uNjE4NC0uMTQzMy0uOTAyIDBsLTIuMzY1MSAxLjE5NTJjLS43MjY1LjM2NzEtMS41NjM5LS4yNDEzLTEuNDM5Mi0xLjA0NTdsLjQwNTctMi42MTg2NGMuMDQ4Ny0uMzE0LS4wNTQ4LS42MzI0My0uMjc4Ny0uODU3ODZsLTEuODY3NS0xLjg4MDAzYy0uNTczNi0uNTc3NTEtLjI1MzgtMS41NjE4Ni41NDk3LTEuNjkxODlsMi42MTU5LS40MjMzYy4zMTM3LS4wNTA3Ni41ODQ2LS4yNDc1Ni43Mjk4LS41MzAxOXoiLz48L2c+PC9zdmc+"
                    style={{ marginLeft: "1px", marginTop: "20px" }}
                  />
                  <p className="fLeYps">
                    Hassle free insurance & quick response.
                  </p>
                  <p
                    className="fLeYps"
                    style={{ marginTop: "-23px"}}
                  >
                    {" "}
                    Absolutely best insurance company
                  </p>
                  <div className="eOOknb ">
                    <div className="ecoHO">
                      <div className="ecostyle">
                        <div className="border">
                          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" />
                        </div>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAB2lBMVEXK4u8EIcYEKdXB3vHK5/nI4e6+3O7E4fPJ5fgEJtEEM+PG4vYDOujI4/AEJ8zF4vTG4/XL5PHP6/rF4O4ELNkEHbkDGacEMt7N6PoEI8kEGau/3OnD3eppaFu72+4ELt0EQO4EQusERvEET/gEWvwEF6BucGgDE4xCXWKv0OgESvQDGbADD3QEEoMEIcHd8vgMPNnh9v3W8f2CnasRGSINDxMEG7PT4+Ke2/sEJr1gYVhJdIAEF5hxbl23nI+ngXW92OnN6PUEZPwEOuAEDWqu2vkGWvd6emgJG38SSJQ9TJGPfWQ1fp++pZrKpJOb0PG54PtZbYTO3dN4j59TZnMEa/4FefsXJXhbRTKJpbtYcsMDClXX7PKIhG8OLJEYYZp6x/h7dF04S4daZXYnIiGzi2IZSb/nyLQGNcE6cIgrPk8pL0karPMxSFkFjuRraI++ooOKrM6HbExuW1Rce5U6ofdqqMMTTMxVrPeh1OCsxtc0R06SqLgFMNR1j9B5k48FFpIsW6KdelA/LSKbscDMzdIvVK5+tM6Owdq0wb6yx9UuQYjD6f4LT9JmqPU5Ul02an2ti29hzv0Na7AIeMk3dZIIbNe45/4yK0clZdBkUEkxKynavqWAYUN8zk0RAAACI0lEQVQozy3N9XvaQBjA8UuKJCEkQEJCUigUCDBchg73QqnbU1tdVlvb+datc3e3/3UXxvene+/z3HsgBHrpSzeU/09KBujNZqDsjXp96TajlGMYxmzu74cCSVbtHc/dqRgjp+wKo49olVotTU/GL8LG1Wp1X0ivgqKWo2kdPRV/vBGPT0JQwYpFWUoGHSz2aHt7cy4G5xC0gQGgwTCDCYM9aec7hbl78gpVVxQwU0ShwF7l8/nOx6c0HSp1FwKdDsMUJgWmKY4UCiNXGTjregLvDQa48LgN4fQYgzswdZ/8jwaeo9Hau62N018nv3/WopGxsdroi+fggtzo9Rln88ffk8295fqtVCr1ZuXDHnA1XK5r5bLTkW52/hwFuPr0zMpi5PvwFZCxWFw3HQ6n1061jtzpQWd5uj6U+iRLzjV+Rtq8DoeXQnjS7qyHKzv7+8MHwJJzPQtm05C8FZK02wgq66MOD78egPbS0pZwzqHEoJydRMUsEvz2Zfc9yGTW05QkCRTKhnmex40BTkDeft71gNzqOoJkAxRFEHa7rYKIVTcV3Ll8yQMsljU8GPALFEGSVhY3iv5AEEdkWW20gqLfbcStRJgkILn9RgoZ6r55jSYWxARKEDYbSRmlqh/BBVkauTXUuOATUStPsiji49zVhBV/GHsAki9bKDLLcbiVDRNWwcdJTRHF7ycnQHJxHkeWJQlnz3ieFRKSe9bH4vPJiX8rUWmhE3qYOQAAAABJRU5ErkJggg=="
                          className="imgsty"
                        />
                      </div>
                    </div>
                  </div>
                  <p
                    className="ghYKa"
                    style={{ marginLeft: "40px", marginTop: "-29px" }}
                  >
                    Vinil Kuma
                  </p>
                  <p className="jwbdFp" style={{ marginLeft: "40px" }}>
                    Hyderabad
                  </p>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="hOxJTo">
      <p className="gYJQDz">Have a partner issued policy?</p>
      <p className="bOYXEd">Login to claim & download your policy</p>
      <div className="bysyth">
      <div className="gYNVsu"> <div className="lll"><div className="vgp"><img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMjcgMjciIHdpZHRoPSIyNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSIjMDAwIiBoZWlnaHQ9IjI2IiByeD0iNi40MDYiIHdpZHRoPSIyNiIgeD0iLjkwOCIgeT0iLjYwMiIvPjxwYXRoIGQ9Im0xOS4xMjggMTguMzg4MWMtNi4zMTI5IDMuMDA0NC0xMC4yMzA3Ni40OTA3LTEyLjczODctMS4wMzYtLjE1NTItLjA5NjItLjQxODk3LjAyMjUtLjE5MDExLjI4NTMuODM1NTIgMS4wMTMxIDMuNTczNzEgMy40NTUgNy4xNDc4MSAzLjQ1NSAzLjU3NjYgMCA1LjcwNDQtMS45NTE2IDUuOTcwNS0yLjI5Mi4yNjQ0LS4zMzc2LjA3NzYtLjUyMzgtLjE4OTUtLjQxMjN6bTEuNzczLS45NzkxYy0uMTY5NS0uMjIwOC0xLjAzMDktLjI2MTktMS41NzI5LS4xOTUzLS41NDI5LjA2NDYtMS4zNTc4LjM5NjQtMS4yODcuNTk1Ny4wMzY0LjA3NDYuMTEwNi4wNDExLjQ4MzYuMDA3Ni4zNzM5LS4wMzczIDEuNDIxNi0uMTY5NSAxLjYzOTkuMTE1OC4yMTkzLjI4NzQtLjMzNDIgMS42NTYyLS40MzUzIDEuODc2OS0uMDk3Ni4yMjA4LjAzNzQuMjc3Ny4yMjA4LjEzMDcuMTgwOS0uMTQ3LjUwODUtLjUyNzYuNzI4My0xLjA2NjIuMjE4My0uNTQxNi4zNTE0LTEuMjk3MS4yMjI1LTEuNDY1MnoiIGZpbGw9IiNmOTAiLz48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0xNC44ODM3IDEyLjI1NzljMCAuNzg4My4wMTk5IDEuNDQ1Ny0uMzc4NiAyLjE0NTgtLjMyMTYuNTY5Mi0uODMxLjkxOTItMS40MDAyLjkxOTItLjc3NjkgMC0xLjIyOTQtLjU5MTktMS4yMjk0LTEuNDY1NiAwLTEuNzI0NyAxLjU0NTMtMi4wMzc3IDMuMDA4Mi0yLjAzNzd6bTIuMDQwNSA0LjkzMmMtLjEzMzguMTE5NS0uMzI3My4xMjgxLS40NzgxLjA0ODQtLjY3MTctLjU1NzgtLjc5MTItLjgxNjgtMS4xNjEyLTEuMzQ5LTEuMTA5OSAxLjEzMjctMS44OTU0IDEuNDcxMy0zLjMzNTQgMS40NzEzLTEuNzAxOSAwLTMuMDI4MTEtMS4wNTAxLTMuMDI4MTEtMy4xNTMzIDAtMS42NDIuODkwODMtMi43NjA1IDIuMTU3MjEtMy4zMDY5IDEuMDk4Ni0uNDgzOSAyLjYzMjUtLjU2OTIgMy44MDUxLS43MDN2LS4yNjE4MWMwLS40ODA5OC4wMzY5LTEuMDUwMTYtLjI0NDgtMS40NjU2NC0uMjQ3Ni0uMzcyODMtLjcyLS41MjY1Mi0xLjEzNTYtLjUyNjUyLS43NzEyIDAtMS40NTk5LjM5NTU3LTEuNjI3OCAxLjIxNTE5LS4wMzQyLjE4MjE5LS4xNjc5LjM2MTQ5LS4zNTAxLjM3MDAxbC0xLjk2MzY5LS4yMTA1NmMtLjE2NTAzLS4wMzcwNy0uMzQ3MTYtLjE3MDc5LS4zMDE2My0uNDI0MTIuNDUyNS0yLjM3OTE1IDIuNjAxMTItMy4wOTYzNyA0LjUyNDkyLTMuMDk2MzcuOTg0NyAwIDIuMjcxMS4yNjE4NSAzLjA0ODEgMS4wMDc1MS45ODQ3LjkxOTIuODkwNyAyLjE0NTc5Ljg5MDcgMy40ODA1MXYzLjE1MzNjMCAuOTQ3Ny4zOTI4IDEuMzYzMi43NjI3IDEuODc1NS4xMzA5LjE4MjEuMTU5NC40MDEzLS4wMDU3LjUzNzktLjQxMjYuMzQ0My0xLjE0NjkuOTg0Ny0xLjU1MSAxLjM0MzNsLS4wMDU3LS4wMDU3IiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBkPSJtMTkuMTI4IDE4LjM4ODFjLTYuMzEyOSAzLjAwNDQtMTAuMjMwNzYuNDkwNy0xMi43Mzg3LTEuMDM2LS4xNTUyLS4wOTYyLS40MTg5Ny4wMjI1LS4xOTAxMS4yODUzLjgzNTUyIDEuMDEzMSAzLjU3MzcxIDMuNDU1IDcuMTQ3ODEgMy40NTUgMy41NzY2IDAgNS43MDQ0LTEuOTUxNiA1Ljk3MDUtMi4yOTIuMjY0NC0uMzM3Ni4wNzc2LS41MjM4LS4xODk1LS40MTIzem0xLjc3My0uOTc5MWMtLjE2OTUtLjIyMDgtMS4wMzA5LS4yNjE5LTEuNTcyOS0uMTk1My0uNTQyOS4wNjQ2LTEuMzU3OC4zOTY0LTEuMjg3LjU5NTcuMDM2NC4wNzQ2LjExMDYuMDQxMS40ODM2LjAwNzYuMzczOS0uMDM3MyAxLjQyMTYtLjE2OTUgMS42Mzk5LjExNTguMjE5My4yODc0LS4zMzQyIDEuNjU2Mi0uNDM1MyAxLjg3NjktLjA5NzYuMjIwOC4wMzc0LjI3NzcuMjIwOC4xMzA3LjE4MDktLjE0Ny41MDg1LS41Mjc2LjcyODMtMS4wNjYyLjIxODMtLjU0MTYuMzUxNC0xLjI5NzEuMjIyNS0xLjQ2NTJ6IiBmaWxsPSIjZjkwIi8+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMTQuODgzNyAxMi4yNTc5YzAgLjc4ODMuMDE5OSAxLjQ0NTctLjM3ODYgMi4xNDU4LS4zMjE2LjU2OTItLjgzMS45MTkyLTEuNDAwMi45MTkyLS43NzY5IDAtMS4yMjk0LS41OTE5LTEuMjI5NC0xLjQ2NTYgMC0xLjcyNDcgMS41NDUzLTIuMDM3NyAzLjAwODItMi4wMzc3em0yLjA0MDUgNC45MzJjLS4xMzM4LjExOTUtLjMyNzMuMTI4MS0uNDc4MS4wNDg0LS42NzE3LS41NTc4LS43OTEyLS44MTY4LTEuMTYxMi0xLjM0OS0xLjEwOTkgMS4xMzI3LTEuODk1NCAxLjQ3MTMtMy4zMzU0IDEuNDcxMy0xLjcwMTkgMC0zLjAyODExLTEuMDUwMS0zLjAyODExLTMuMTUzMyAwLTEuNjQyLjg5MDgzLTIuNzYwNSAyLjE1NzIxLTMuMzA2OSAxLjA5ODYtLjQ4MzkgMi42MzI1LS41NjkyIDMuODA1MS0uNzAzdi0uMjYxODFjMC0uNDgwOTguMDM2OS0xLjA1MDE2LS4yNDQ4LTEuNDY1NjQtLjI0NzYtLjM3MjgzLS43Mi0uNTI2NTItMS4xMzU2LS41MjY1Mi0uNzcxMiAwLTEuNDU5OS4zOTU1Ny0xLjYyNzggMS4yMTUxOS0uMDM0Mi4xODIxOS0uMTY3OS4zNjE0OS0uMzUwMS4zNzAwMWwtMS45NjM2OS0uMjEwNTZjLS4xNjUwMy0uMDM3MDctLjM0NzE2LS4xNzA3OS0uMzAxNjMtLjQyNDEyLjQ1MjUtMi4zNzkxNSAyLjYwMTEyLTMuMDk2MzcgNC41MjQ5Mi0zLjA5NjM3Ljk4NDcgMCAyLjI3MTEuMjYxODUgMy4wNDgxIDEuMDA3NTEuOTg0Ny45MTkyLjg5MDcgMi4xNDU3OS44OTA3IDMuNDgwNTF2My4xNTMzYzAgLjk0NzcuMzkyOCAxLjM2MzIuNzYyNyAxLjg3NTUuMTMwOS4xODIxLjE1OTQuNDAxMy0uMDA1Ny41Mzc5LS40MTI2LjM0NDMtMS4xNDY5Ljk4NDctMS41NTEgMS4zNDMzbC0uMDA1Ny0uMDA1NyIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" className="amozon" style={{ marginLeft: "202px",marginTop: "189px"}}/></div></div></div>
      <div className="gYNVsu"> <div className="lll"><div className="vgp"><img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMjcgMjciIHdpZHRoPSIyNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJtMi45MzMxMSAzLjE5OTkyaDIwLjh2MjAuOGgtMjAuOHoiLz48L2NsaXBQYXRoPjxyZWN0IGZpbGw9IiNlYWVjZjYiIGhlaWdodD0iMjYiIHJ4PSI2LjQwNiIgd2lkdGg9IjI2IiB4PSIuMzM0IiB5PSIuNjAyIi8+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48ZWxsaXBzZSBjeD0iMTMuMzI5IiBjeT0iMTMuNjA5IiBmaWxsPSIjZWFlY2Y2IiByeD0iMTAuNCIgcnk9IjEwLjQiLz48ZyBzdHJva2Utd2lkdGg9Ii4wNDUiPjxwYXRoIGQ9Im0xMS45Njg0IDQuMjAxODFjMS4yMzAxLS4yMDQ1MyAyLjUwMDktLjE4NzQ5IDMuNzMxLjA1MTE0LjYwNjMuMTAyMjcgMS4xNjYuMzg2MzQgMS42OTA3LjY4MTc5LjU5NDYuMzQ2NTcgMS4yMDA5LjY2NDc0IDEuODEzLjk3MTU0IDEuNDc1Ljk1NDUxIDIuNjgxNyAyLjMxODA4IDMuMzY5NiAzLjkyMDI4LjM5MDYuODg2MzQuNjIzOCAxLjgzNTE0LjcyMjkgMi43OTUzNC4yMzMyIDEuMjYxMy4xMDUgMi41NjgxLS4zMjA2IDMuNzc4Mi0uMzM4MSAxLjE5ODgtMS4xMTM1IDIuMTk4OC0xLjczNzMgMy4yNjExLS4wODc0LjE0MjEtLjIwOTkuMjY3MS0uMzIwNi4zOTc3LS44MDQ1Ljk0MzMtMS43NTQ4IDEuNzk1NS0yLjkzMjQgMi4yNjcxLjA1MjUtLjA2ODIuMDgxNi0uMTQyLjA5MzMtLjIyMTYtLjEzNDEuMDI4NC0uMjY4Mi4wNjI2LS40MDIzLjEwMjQuMDc1OC0uMDk2Ni4xOTI0LS4xNDc4LjI5NzMtLjIxNi4zODQ4LS4yNDQzLjc1MjEtLjUxMTMgMS4xMDE5LS44MDExLjA1ODMtLjA1MTEuMTM5OS0uMDc5Ni4xNjMyLS4xNTkxLS4xMzk5LjA1NjgtLjIyNzQuMTg3NS0uMzU1Ni4yNjctMS44NDgxIDEuMzAxMS00LjE2MjUgMi4wMTctNi40NDc3IDEuODIzOC0yLjM1NTMtLjE4NzUtNC41OTk3NC0xLjMwMTEtNi4xNzM3Ny0zLjAxNjktMS4wOTAxNy0xLjE3NjEtMS44ODMwMi0yLjYxMzUtMi4yODUyNy00LjE0NzUtLjQ3ODA1LTEuNzYxMy0uNDI1NTgtMy42NTkuMTgwNzItNS4zODYyLjM0OTc4LS45OTk5MS44NjI4LTEuOTQ4NzMgMS41NTA3Mi0yLjc2Njg4IDEuMDc4NTEtMS4zMTI0NCAyLjQ2MDE2LTIuNDE0NjYgNC4wNTE2OS0zLjA3OTQuNzM0NTEtLjE4NzQ5IDEuNDU3NDEtLjQwMzM5IDIuMjA5NTEtLjUyMjcxem0uMTE2Ni41Mzk3NWMtMS42NzMyLjI4OTc2LTMuMjQ3MjIgMS4wNjI0NS00LjUyMzk0IDIuMTUzMzEtMS4zNjk5OSAxLjE2NDczLTIuNDA3NjkgMi42OTg3NS0yLjk1NTY5IDQuMzg2MTMtLjE5ODIxLjk2MDItLjQwODA4IDEuOTM3NS0uMzk2NDIgMi45MjA0LjIwOTg3IDEuNDYwMS42NjQ1OSAyLjkxNDYgMS41MTU3NCA0LjE0NzUuNTgyOTcuODUyMiAxLjM1ODMzIDEuNTczOCAyLjIzMjggMi4xMzA2LjA0NjY0LjAyODQuMDk5MTEuMDUxMS4xNDU3NC4wNjgyLS41MTMwMi0uMzUyMy0uOTUwMjUtLjc4OTgtMS4zOTkxNC0xLjIxNTktMS40NTc0NC0xLjQzNzQtMi4yNzM2MS0zLjQ1NDQtMi4yNjc3OC01LjQ3MTMtLjAxMTY2LTEuNzI3Mi41NDgtMy40NDg3IDEuNTM5MDYtNC44ODA0OS40MjU1Ny0uNDI2MTIuNzExMjMtLjk2MDE5IDEuMTE5MzEtMS40MDkwMyAxLjM0NjY4LTEuMjU1NjIgMy4wNjA2Mi0yLjExMzU0IDQuODYyMDItMi41NTY3IDEuOTY0Ni0uMjg0MDggNC4wMTA5LjAzOTc3IDUuODAwNi44NzQ5NiAxLjY5MDcuNzg0MDUgMy4xNTk4IDIuMDM5NjggNC4xMDQyIDMuNjE5MTUuNzIyOSAxLjE5MzExIDEuMTE5MyAyLjU2ODExIDEuMTU0MyAzLjk0ODcxLjAyMzMtLjUwNTcuMDY5OS0xLjAyODQtLjA4MTYtMS41MjI3LS4xODY2LS43NDk5LS4zNjE1LTEuNTE3LS43MjI5LTIuMjA0NDMtLjY0NzEtMS4wNTY3Ny0xLjMxMTctMi4xMzYyNi0yLjI2Mi0yLjk2MDA5LS43MjI5LS42MjQ5Ny0xLjU2ODItMS4xMDc5LTIuNDY2LTEuNDU0NDgtLjc4MTItLjIwNDU0LTEuNTY4Mi0uMzg2MzUtMi4zNTUyLS41Nzk1Mi0xLjAwMjctLjE3NjEzLTIuMDQwNC0uMTY0NzctMy4wNDMxLjAwNTY4em0uMjMzMiAxLjM0MDg1Yy0xLjUyNzQuMzYzNjItMi45MzI0MiAxLjEzMDYzLTQuMTMzMzUgMi4xMDIxOC0uMzQzOTYuMzE4MTctLjY3MDQyLjY2NDc0LS44NTY5OCAxLjA5NjU0LS4wNDA4LjA5NjU5LS4wNjQxMi4yMDQ1NC0uMTI4MjUuMjk1NDQuMDE3NDkgMCAuMDQ2NjQtLjAwNTY4LjA2NDEzLS4wMTEzNi4zMzIyOS0uNDQ4ODQuNjgyMDgtLjg4NjMyIDEuMTAxODItMS4yNjEzMSAxLjE4MzQ1LTEuMDczODEgMi43NTc1My0xLjY5ODc5IDQuMzU0ODMtMS44Mjk0NiAxLjgwMTQtLjE1OTA4IDMuNjQzNi4yNzg0IDUuMTcxIDEuMjA0NDkuNTI0Ny4yODk3NiAxLjAxNDQuNjM2MzQgMS40MzQxIDEuMDYyNDUuNzQ2My43NDk5NyAxLjI4MjYgMS42OTg4MiAxLjU5MTYgMi42OTg3Mi4zMjY0LjkyMDQuNTk0NiAxLjg5NzcuNDY2NCAyLjg4MDYtLjE2OTEgMS4wMzk4LS4xOTI0IDIuMTI0OS0uNjI5NyAzLjEwNzgtLjM3MzEuNTYyNS0uNzE3IDEuMTQyMS0xLjEwMTggMS42OTMxLTEuMjUzNCAxLjM4NjMtMi44NjI0IDIuNTIyNi00LjcxNjMgMi45NjU4LS4xNzQ5LjAxNy0uMzMyMy4xMTM2LS41MTMuMDk2Ni4xODA3LjAzOTcuMzQ0LS4wNjI1LjUyNDctLjA2MjUgMS43OTU2LS4zMjM5IDMuNDY4Ny0xLjIyNzQgNC43MTYzLTIuNTIyNiAxLjE2NTktMS4yMTAyIDEuOTUyOS0yLjc4NCAyLjE2MjgtNC40MzczLjAwNTgtLjY4MTggMC0xLjM1NzkgMC0yLjAzOTcuMDIzMy0uMzg2NC0uMDg3NC0uNzYxNC0uMTgwNy0xLjEzNjMtLjQ4MzktMS43ODk3LTEuNjQ5OC0zLjM2OTIxLTMuMTU5Ny00LjQ3NzEyLS40NDMxLS4zMTgxNi0uODk3OC0uNjMwNjUtMS40MTA4LS44MzUxOS0xLjQ4NjYtLjYzMDY1LTMuMTU0LS43NzgzNy00Ljc1NzEtLjU5MDg4em0tMi4zNjY5MyA0LjkwODg5Yy0uNzE3MDYuODgwNi0xLjA2MTAyIDIuMDQ1My0uOTA5NDQgMy4xNTg5LjA4NzQ0LjY3MDUuMzU1NjEgMS4zMDExLjcxNzA2IDEuODY5My0uMDQ2NjQtLjAzNDEtLjEzOTkyLS4xMDgtLjE4NjU1LS4xNDIxLS4xMTA3Ny0uMDM5Ny0uMTEwNzcuMDg1My0uMDU4My4xNDIxLjI3OTgzLjUzNC43NDAzNi45NTQ1IDEuMjMwMDYgMS4zMTI0LjQyNTYuMjI3My44Mjc4LjUwMDEgMS4yODI2LjY3NjEuNTQyMS4xODc1IDEuMTEzNS4zMTI1IDEuNjkwNi4yNjcuNjY0Ni0uMDYyNiAxLjM0MDktLjE3NjIgMS45NDEzLS40NzcyLjYyMzgtLjI5NTQgMS4xNDg1LS43NjcgMS42MDktMS4yNjcuMzI2NS0uMzIzOC4zNjE1LS44MDExLjYwNjMtMS4xNzA0LjI3NC0uNDQ4OC4zMjY1LS45ODg2LjMzMjMtMS40OTk5LjAxMTctLjU1MTEtLjEwNDktMS4wOTY2LS4yNjgxLTEuNjE5My0uMDgxNy0uMzYzNi0uMjkxNS0uNjgxOC0uNDk1Ni0uOTg4Ni0uNjU4Ny0uOTAzMy0xLjYxNDgtMS42MjQ4OS0yLjczNDEtMS44ODA1Ni0xLjczMTUtLjQzMTgtMy42NjcuMjQ5OTktNC43NTcxMyAxLjYxOTI2eiIgZmlsbD0iIzIyMWUxZiIgc3Ryb2tlPSIjMjIxZTFmIi8+PHBhdGggZD0ibTkuOTY3NjYgMTEuMDYxYzEuMDk3MjQtMS4zNzM0NiAzLjA0NTM0LTIuMDU3MzMgNC43ODgwNC0xLjYyNDIxIDEuMTI2Ni4yNTY0NSAyLjA4ODkuOTgwMjEgMi43NTE5IDEuODg2MzEuMjA1NC4zMDc4LjQxNjYuNjI2OS40OTg4Ljk5MTYuMTY0My41MjQzLjI4MTYgMS4wNzE0LjI2OTkgMS42MjQyLS4wMDU5LjUxMjktLjA1ODcgMS4wNTQzLS4zMzQ1IDEuNTA0Ni0uMjQ2NC4zNzA0LS4yODE2Ljg0OS0uNjEwMiAxLjE3MzktLjQ2MzUuNTAxNS0uOTkxNi45NzQ2LTEuNjE5NSAxLjI3MDktLjYwNDMuMzAyLTEuMjg1LjQxNi0xLjk1MzkuNDc4Ny0uNTgwOS4wNDU2LTEuMTU1OS0uMDc5OC0xLjcwMTYtLjI2NzgtLjQ1NzctLjE3NjctLjg2MjYtLjQ1MDMtMS4yOTA5LS42NzgyLS40OTI5LS4zNTktLjk1NjQ3LS43ODA2LTEuMjM4MTItMS4zMTY1LS4wNTI4MS0uMDU3LS4wNTI4MS0uMTgyMy4wNTg2OC0uMTQyNC4wNDY5NC4wMzQyLjE0MDgyLjEwODIuMTg3NzYuMTQyNC0uMzYzNzktLjU2OTktLjYzMzcxLTEuMjAyNC0uNzIxNzItMS44NzQ5LS4xNTI1Ni0xLjExNy4xOTM2My0yLjI4NTMuOTE1MzYtMy4xNjg2em0yLjE0MTc0LTEuMTYyNmMtLjA1ODcuMDIyOC0uMTIzMy4wNTEyOS0uMTcwMi4wOTY4OCAxLjI4NS0uNTM1NyAyLjgzNDEtLjM5ODkyIDMuOTk1OS4zNTMzMi4zMDUxLjI3MzYuNzA0MS40NTAyLjkyMTIuODAzNi40Mjg0LjU2OTkuODAzOSAxLjE5MS45ODU4IDEuODc0OS4yODc1IDEuNjA3MS0uNDQwMSAzLjMzMzktMS44MDE0IDQuMjg1Ni0uMzYzOC4yNzkxLS43OTguNDUwMS0xLjIyNjMuNjE1NS0uMzE2OS4xMTQtLjY2ODkuMDk2OS0uOTkxNy4xOTM4LjIxMTMuMDA1Ny40Mjg0LjEwMjUuNjM5Ni4wMzk3LjM3NTUtLjA5NjcuNzYyOC0uMTgyMiAxLjExNDktLjM1OS42Mjc4LS4zNzA0IDEuMjY3NC0uNzc1IDEuNjc4MS0xLjM4NDguMDY0Ni0uMTA4My4xNzAyLS4yMDUzLjE4MTktLjMzNjJsLjAyOTQtLjA1MTJjLjAwNTgtLjAwNTguMDE3Ni0uMDIyOC4wMjM0LS4wMzQzLjI0NjUtLjMzNjIuMjgxNy0uNzU4LjM4NzMtMS4xNTExLjI0NjQtLjg1NDkuMTQwOC0xLjc4MzgtLjIxNzEtMi41OTMtLjQ2MzUtMS4wMzE1LTEuMzQzNy0xLjg2OTMtMi4zOTk5LTIuMzI1MjEtLjU4MDktLjI2MjE1LTEuMjI2My0uMzMwNTMtMS44NTQyLS4zNTkwMy0uNDUxOC4wMjI4LS44ODAxLjE3MDk3LTEuMjk2Ny4zMzA1NHptMy4xOTIuOTE3NWMuMzQwMy4yOTA3LjY1NzIuNTk4NC45MzMuOTQwNC41MjIyLjY0MzkuOTIxMiAxLjQ1MzIuODIxNCAyLjI5MDktLjA1MjguNjI2OS0uNDE2NiAxLjE2ODMtLjc1NjkgMS42ODEyLS4zMDUxLjQ0NDUtLjY0NTUuODgzMy0xLjA4NTUgMS4yMTk1LS4yMTcxLjE3MDktLjQ5ODguMjM5My0uNzUxMS4zNTktLjIzNDcuMTA4My0uNDUxOC4yNTA4LS43MDQxLjMxMzQuMzY5Ny4wNzQyLjczMzQtLjA2MjYgMS4wNzM4LS4xNzY2LjkxNTMtLjM0NzcgMS42NjY0LTEuMDM3MiAyLjEyOTktMS44NjkzLjM1MjEtLjcxODIuNDI4NC0xLjUzODcuMzI4Ni0yLjMxOTQtLjE4MTktLjcwNjctLjU2MzMtMS4zNTA3LTEuMDUwMy0xLjkwMzUtLjE5OTUtLjE5MzgtLjQyMjUtLjM5ODktLjcxNTgtLjQyMTctLjA4MjItLjAyODQtLjE0NjctLjA3OTctLjIyMy0uMTEzOXptLTUuNzAzNDEgMy45NzIyYy40MDQ5MSAxLjU3ODYgMS45MzA1MSAyLjg0MzggMy42MjA0MSAyLjg4MzYtLjQzNDMtLjEzNjctLjg1MDktLjMxMzQtMS4yNjE2LS41MDE1LS40MDQ5LS4yNjc4LS44NjI1LS40NzMtMS4yMTQ2LS44MjA2LS41MzQtLjUwNzItMS4wMTUxMi0xLjExNy0xLjE4NTI4LTEuODM1MS0uMDIzNDcuMDkxMi4wMTE3NC4xODI0LjA0MTA3LjI3MzZ6IiBmaWxsPSIjZDdkZjIwIiBzdHJva2U9IiNkN2RmMjAiLz48cGF0aCBkPSJtMTQuODI5OCAxNy42NzAyYzEuMDA4LS4yNDg2IDEuOTEwOC0uODU0NCAyLjQ3NTctMS42Nzc4LS4wMTExLjExOTItLjExMDguMjA3MS0uMTcxNy4zMDU1LS4zODc3LjU1NDEtLjk5MTQuOTIxOC0xLjU4NCAxLjI1ODQtLjMzMjMuMTYwNi0uNjk3OC4yMzgzLTEuMDUyMy4zMjYyLS4xOTk0LjA1NzEtLjQwNDMtLjAzMTEtLjYwMzctLjAzNjEuMzA0Ni0uMDg4Mi42MzY5LS4wNzI2LjkzNi0uMTc2MnoiIGZpbGw9IiMyMjFlMWYiIHN0cm9rZT0iIzIyMWUxZiIvPjwvZz48L2c+PC9zdmc+" className="amozon" style={{ marginLeft: "280px",marginTop: "189px"}}/></div></div></div>
      <div className="gYNVsu"> <div className="lll"><div className="vgp"><img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMjcgMjciIHdpZHRoPSIyNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSIjY2YzODFlIiBoZWlnaHQ9IjI2IiByeD0iNi40MDYiIHdpZHRoPSIyNiIgeD0iLjc1OSIgeT0iLjYwMiIvPjxwYXRoIGQ9Im0xNi4zNzQ2IDEzLjU5MzNjLS40OTIxIDEuNjQyOS4zMDk2IDMuMjg1NyAyLjAwNDIgMi42Mjg3LS40OTIgMS4xODY1LTEuMzEyIDIuOTU3LTEuMzEyIDQuODAwNyAwIDAgMCAxLjI0MTMuOTExIDEuNTUxNiAwIDAgMS4yNzU2LjMxMDMgMS4wMDI1LS44MjE0LS4yMDA1LS43MTE5LS4yNTUxLTEuNDQyLS4xNjQtMi4xNzIyLjMwOTYtMS41MTUxLjc4MzUtMi45OTM3IDEuNDAzLTQuNDE3NCAwIDAgMS45NDk3LTQuMDcwNyAzLjA3OTMtNS45NjkwNCAwIDAgLjQ3MzYtLjk2NzQyLS40OTIxLS45Njc0Mi0uMjkxNSAwLS41NjQ4LjE0NjAxLS43NDY5LjM4MzIybC0yLjc1MTIgNC45MTAyNGMtLjQxOTQuNzY2Ny0uODIgMS4wMDQxLTEuMTI5OSAxLjAwNDEtLjY5MjMgMC0uNTQ2Ny0xLjExMzUtLjQzNzItMS41MTUzLjMwOTYtMS4zNjkuODAxNi0yLjY4MyAxLjQ1NzYtMy45NDI3OC40OTItMS4wNzY5Mi0uNDkyLTEuMTY4MTEtLjQ5Mi0xLjE2ODExLS42MTk2LS4xNjQzMS0xLjA5MzIuODU4MDEtMS4wOTMyLjg1ODAxbC0xLjA5MzMgMi4yMjY4OGMtLjcxMDYgMS4yNDEzLTEuNDk0MSAyLjQyNzgtMi4zMzIyIDMuNTc3OCAwIDAtLjE0Ni4xODI1LS4yNTUyLjEwOTYtLjEwOTQtLjA5MTMtLjA1NDgtLjI3MzgtLjA1NDgtLjI3MzguMTgyMy0xLjUxNTIuNDkyLTMuMDEyLjkxMTEtNC40OTA1OS4wMTgyLS4wOTEzNS4wMzY0LS4xNjQyNC4wMzY0LS4yNTU1MS4wMTg1LS4yMDA4My0uMDM2NC0uNDAxNTktLjE2MzktLjU0Nzc2LS4xMjc2LS4xNjQyMy0uMzA5Ni0uMjU1NS0uNTEwMi0uMjU1NS0uNDkxOS0uMDU0NjctLjcyODkuMTgyNjEtMS4xNjYuNzExODQtLjk2NTcgMS4xODY2Mi0yLjA5NTUgMi45NzU0Mi0yLjY0MjEgMy43Nzg2Mi0uMDU0Ni4wOTEyLS4xNjQuMDczLS4xNjQtLjA1NDggMC0uMzY1MSAxLjI3NTYtNC4zMDc5NSAxLjI3NTYtNC4zMDc5NXMuMTQ1Ni0uNTQ3NTMtLjI5MTUtLjczMDA3YzAgMC0uNjc0MS0uNDE5ODEtMS4yMjEuNDAxNTJsLTIuNjIzNzQgMy41Nzc5Yy0uMjAwNC4yNzM4LS4zMDk2OS4xODI2LS4zMDk2OS4xODI2di0uMjM3M2wuNDE5MDYtMi4zMzY0OGMuMzI4MDQtMS43ODg4NC0uMjkxNS0xLjg4MDE5LS42OTIzNy0xLjk1MzE1LS4yOTE1OCAwLS42MDEyNy4wOTExOS0uODU2NDYuMjU1NTgtLjgxOTg2LjQwMTUxLTEuNDM5MzkgMi4wMjYxNS0xLjQzOTM5IDIuMDI2MTVzLS4xODIyMS41ODQxLjIxODU4LjgyMTNjLjEyNzY0LjA3My4yNzMzOS4xMjc4LjQxOTE0LjEwOTYuNTgzMDgtLjAzNjYuNjkyNDUtMS4xMTM1NSAxLjExMTUxLTEuMTEzNTUuMDcyOTEgMCAuMDcyOTEuMDkxMzUuMDcyOTEuMTA5NjVsLTEuMzQ4MzYgNS42NzdjLS4wOTExMS4zMjg1LjA1NDY0LjY3NTIuMzI4MDMuODU3OC4xODIyMS4xMDk2LjM4MjYxLjEyNzguNTgzLjA5MTIuMTgyMjktLjA1NDYuMzQ2MjMtLjE4MjQuNDU1NTItLjM0NjdsLjQ5MTktLjc2NjZjLjcxMDcxLTEuMjU5NiAyLjAyMjYyLTMuMDY2OCAyLjE1MDE4LTMuMDY2OC4wNTQ1NyAwIC4wNzI5OSAwIC4wNzI5OS4wNTQ3bC0uNDkyMTIgMy4zNDA2Yy0uMDU0NzMuMjkyLjEwOTM2LjYwMjMuMzgyNjguNzMwMS4yNTUwNC4wOTEyLjUyODQzLjA3My43NjUxMy0uMDU0OC4yNzMzOS0uMjE5LjUxMDMtLjQ5MjkuNjc0My0uODAzMi4yNzMyLS40MzgxIDEuNTg1Mi0xLjk4OTcgMi4zODY4LTMuNDEzNS4wNTQ4LS4wOTEzLjEwOTQgMCAuMDkxMy4wNTQ5LS4xNjM5Ljc0ODMtLjI5MTggMi43Mzc5LS4zMDk5IDMuMjMwOC0uMDM2NS45Njc1LjcxMDUgMS4wNzcuNzI5IDEuMDc3LjQ5Mi4wMzY1Ljk2NTYtLjE4MjYgMS4yMzg5LS41ODQxIiBmaWxsPSIjZmZmIi8+PC9zdmc+" className="amozon" style={{ marginLeft: "360px",marginTop: "189px"}}/></div></div></div>
       <div className="gYNVsu"> <div className="lll"><div className="vgp"><img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMjcgMjciIHdpZHRoPSIyNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSIjZWRjZDE0IiBoZWlnaHQ9IjI2IiByeD0iNi40MDYiIHdpZHRoPSIyNiIgeD0iLjE4NSIgeT0iLjYwMiIvPjxwYXRoIGQ9Im0xNC4zNDk5IDEwLjcwNjZoLTIuNjg3NmMtLjg0ODggMC0xLjQ4NTMuNjM2NS0xLjQ4NTMgMS40ODUydjQuNzM4N2MwIC40OTUxLjQyNDQuOTE5NC45MTk0LjkxOTRoLjA3MDhjLjE0MTQgMCAuMjEyMi0uMDcwNy4yMTIyLS4yMTIxdi0xLjQxNDZjMC0uNzc4LjYzNjUtMS40MTQ1IDEuNDE0NS0xLjQxNDVoLjQyNDNjLjc3OCAwIDEuNDE0Ni42MzY1IDEuNDE0NiAxLjQxNDV2MS40MTQ2YzAgLjE0MTQuMDcwNy4yMTIxLjIxMjIuMjEyMS40OTUgMCAuOTE5NC0uNDI0My45MTk0LS45MTk0di00LjczODdjLjA3MDctLjc3OC0uNTY1OC0xLjQ4NTItMS40MTQ1LTEuNDg1MnoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJtMTMuMDA2OCAxNS41MTU3Yy40OTUxIDAgLjkxOTUuNDI0NC45MTk1LjkxOTV2My43NDg1YzAgLjQ5NTEtLjQyNDQuOTE5NC0uOTE5NS45MTk0LS40OTUgMC0uOTE5NC0uNDI0My0uOTE5NC0uOTE5NHYtMy43NDg1YzAtLjQ5NTEuNDI0NC0uOTE5NS45MTk0LS45MTk1eiIgZmlsbD0iIzM0Mzc1OCIvPjxnIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Im0xMS4wOTYxIDkuMjIxMjktMS40ODUyNi0xLjQ4NTI2Yy4xNDE0NS0uMTQxNDUuMjEyMTgtLjM1MzYzLjIxMjE4LS40OTUwOCAwLS40OTUwOS0uNDk1MDktLjkxOTQ1LS45OTAxNy0uODQ4NzItLjQ5NTA5IDAtLjg0ODcyLjQyNDM2LS44NDg3Mi44NDg3MiAwIC40OTUwOC40MjQzNi44NDg3Mi45MTk0NS44NDg3Mi4xNDE0NSAwIC4zNTM2My0uMDcwNzMuNDk1MDgtLjE0MTQ2bDEuMjczMDQgMS4yMDIzNWgtMS43NjgxMmMtLjIxMjE4IDAtLjQyNDM2LjIxMjE4LS40MjQzNi40MjQzNnMuMjEyMTguNDI0MzYuNDI0MzYuNDI0MzZoMi4xMjE4MmMuMjEyMiAwIC40MjQzLS4yMTIxOC40MjQzLS40MjQzNiAwLS4xNDE0NS0uMTQxNC0uMzUzNjMtLjM1MzYtLjM1MzYzeiIvPjxwYXRoIGQ9Im0xNC44NDM1IDkuMjIxMDggMS40ODUyLTEuNDg1MjZjLS4xNDE0LS4xNDE0NS0uMjEyMS0uMzUzNjMtLjIxMjEtLjQ5NTA5IDAtLjQ5NTA4LjQyNDMtLjkxOTQ0LjkxOTQtLjkxOTQ0cy45MTk0LjQyNDM2LjkxOTQuOTE5NDRjMCAuNDk1MDktLjQyNDMuODQ4NzItLjkxOTQuODQ4NzItLjE0MTUgMC0uMzUzNi0uMDcwNzItLjQ5NTEtLjE0MTQ1bC0xLjI3MzEgMS4yMDIzNWgxLjYyNjdjLjIxMjIgMCAuNDI0NC4yMTIxOC40MjQ0LjQyNDM2cy0uMjEyMi40MjQzNi0uNDI0NC40MjQzNmgtMi4xMjE4Yy0uMjEyMSAwLS40MjQzLS4yMTIxOC0uNDI0My0uNDI0MzYuMTQxNC0uMTQxNDUuMjgyOS0uMzUzNjMuNDk1MS0uMzUzNjN6Ii8+PHBhdGggZD0ibTEyLjkzNTIgMTAuMjEzNGMuNzAzMSAwIDEuMjczMS0uNTA2NjkgMS4yNzMxLTEuMTMxNjdzLS41Ny0xLjEzMTYzLTEuMjczMS0xLjEzMTYzLTEuMjczMS41MDY2NS0xLjI3MzEgMS4xMzE2My41NyAxLjEzMTY3IDEuMjczMSAxLjEzMTY3eiIvPjwvZz48L3N2Zz4=" className="amozon" style={{ marginLeft: "440px",marginTop: "189px"}}/></div></div></div>
       <div className="gYNVsu"> <div className="lll"><div className="vgp"><img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMjcgMjciIHdpZHRoPSIyNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSIjYzkzMjNlIiBoZWlnaHQ9IjI2IiByeD0iNi40MDYiIHdpZHRoPSIyNiIgeD0iLjYxIiB5PSIuNjAyIi8+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0ibTExLjUyNDkgMTcuMTM0OWMuMTM0NCAxLjI2NzEtLjcxMDMgMi4xNjk0LTEuNzQ2OTMgMi4yODQ1LS41Mzc1My4wNTc2LTEuMDM2NjYtLjExNTEtMS40NTkwMS0uNDYwNy0uNDIyMzQtLjM0NTUtLjYzMzUxLS44MDYzLS42OTExLTEuMzYzLS4zMDcxNi4wMzg0LS42MTQzMi4wNTc2LS45MDIyOC4wOTYtLjI2ODc3LjAzODQtLjUzNzUzLjA1NzYtLjgwNjMuMDk2LS4xOTE5Ny4wMzg0LS4yNDk1Ni0uMDM4NC0uMjg3OTYtLjIxMTItLjIzMDM3LS45NTk5LS40Nzk5My0xLjkwMDYtLjY5MTEtMi44Nzk2LS4xOTE5OC0uOTIxNS0uMzA3MTYtMS44NDMtLjMwNzE2LTIuNzY0NSAwLS4zNDU1LjA1NzU5LS43MTAzLjEzNDM4LTEuMDU1OC4wOTU5OS0uNTE4My40MjIzNC0uOTAyMjkuODgzMDgtMS4xNTE4Ni42NTI3MS0uMzY0NzUgMS4zNDM4Mi0uNjE0MzIgMi4wNTQxMy0uNzg3MDkgMS4wNzUwNS0uMjY4NzcgMi4xNjkzMS0uNTE4MzMgMy4yNjM1NS0uNjkxMTEgMS4wMTc1LS4xNzI3OCAyLjA1NDEtLjI2ODc2IDMuMDkwOC0uMzY0NzUuOTk4My0uMDc2NzkgMS45OTY1LS4xMzQzOCAyLjk5NDgtLjEzNDM4IDEuMDc1MSAwIDIuMTMwOS4wNzY3OSAzLjIwNi4xMzQzOC4zODM5LjAxOTIuNjkxMS4yNDk1Ni45NTk4LjUzNzUzLjUxODQuNTU2NzIuODA2MyAxLjIyODYzIDEuMDM2NyAxLjk1ODE4LjM2NDggMS4xNTE4LjUxODMgMi4zNjEyLjQ0MTUgMy41NzA3LS4wMzg0LjYzMzUtLjEzNDMgMS4yNjctLjQwMzEgMS44NjIxLS4wMzg0LjA5Ni0uMDk2LjEzNDQtLjIxMTIuMTUzNi0uNTM3NS4wNTc2LTEuMDc1LjExNTItMS42MTI2LjE3MjgtLjA3NjcuMDE5Mi0uMTcyNy4wMTkyLS4yNjg3LjAzODQuMjExMS42OTExLjEzNDQgMS4zNDM4LS4zMjY0IDEuOTAwNS0uMzI2My40MjI0LS43Njc5LjY1MjctMS4yODYyLjcxMDMtMS4xMTM1LjEzNDQtMi4yODQ1LS43Mjk1LTIuMTg4NS0yLjIwNzctMS42MzE4LjE5Mi0zLjI0NDQuMzg0LTQuODc2Mi41NTY3em0tNi40NTAzLTUuMTA2NWMuMDc2NzkuNzEwMy4xMTUxOCAxLjM0MzkuMjMwMzcgMS45Nzc0LjE5MTk3IDEuMDM2Ni40NjA3NCAyLjAzNDkuNjkxMSAzLjA3MTYuMDM4NC4yMTExLjEzNDM5LjIxMTEuMzA3MTYuMTkxOS4zNjQ3NS0uMDU3Ni43NDg3LS4wOTYgMS4xMTM0NS0uMTM0NC4xNTM1OC0uMDE5MS4yMzAzNy0uMDU3NS4yNDk1Ny0uMjExMS4xNzI3OC0uNzQ4Ny45MDIyOC0xLjM4MjIgMS42NTA5OC0xLjQzOTguOTAyMjctLjA3NjggMS41NTQ5Ny4zMDcxIDEuOTk2NTcgMS4wNzUuMDU3Ni4wOTYuMDk2LjEzNDQuMjExMS4xMTUyLjM4NC0uMDM4NC43Njc5LS4wNzY4IDEuMTUxOS0uMTM0NC41OTUxLS4wNzY4IDEuMTcxLS4xMzQ0IDEuNzY2MS0uMjExMS42MzM2LS4wNzY4IDEuMjY3MS0uMTUzNiAxLjkxOTgtLjIxMTIuMTE1Mi0uMDE5Mi4xNTM2LS4wNTc2LjIxMTItLjE1MzYuNjMzNS0xLjMyNDYgMi4zODA0LTEuNTE2NiAzLjMwMTktLjM2NDcuMDc2OC4wOTU5LjEzNDQuMTE1MS4yNDk2LjExNTEuNTU2Ny0uMDU3NiAxLjA5NDItLjEzNDMgMS42NTEtLjE5MTkuMTE1Mi0uMDE5Mi4xOTE5LS4wNTc2LjIxMTEtLjE3MjguMDk2LS40Nzk5LjIzMDQtLjk0MDcuMjQ5Ni0xLjQzOTguMDc2OC0xLjIyODctLjA5Ni0yLjQxODktLjQ3OTktMy41NzA3LS4xOTItLjU1Njc3LS40MjI0LTEuMDc1MS0uODI1NS0xLjUxNjY0LS4yMTEyLS4yMzAzNy0uNDQxNi0uNDIyMzQtLjc0ODctLjQ2MDc0LS43ODcxLS4wNTc1OS0xLjU3NDItLjEzNDM4LTIuMzYxMy0uMTM0MzgtMS4yMjg2IDAtMi40NTczLjA1NzU5LTMuNjY2Ny4xMzQzOC0uOTU5OS4wNTc2LTEuOTE5OC4xNzI3OC0yLjg2MDQuMzA3MTYtMS4zMjQ2Ni4xOTE5OC0yLjY0OTI4LjQ2MDc0LTMuOTE2MzEuODYzODktLjU1NjczLjE3Mjc3LTEuMTMyNjUuMzgzOTUtMS42MzE3OC43MTAzMy0uMjMwMzcuMTUzNi0uNDAzMTUuMzI2My0uNDYwNzQuNTk1MS0uMDk1OTkuNDAzMS0uMTUzNTguODI1NS0uMjExMTcgMS4xOTAyem0xMy4yODQ2IDYuMjk2OGMuODI1NSAwIDEuNDc4Mi0uNjUyNyAxLjQ3ODItMS40NTkgMC0uODI1NS0uNjcxOS0xLjQ3ODItMS40OTc0LTEuNDc4MnMtMS40NTkuNjUyNy0xLjQ1OSAxLjQ3ODJjMCAuODA2My42NTI3IDEuNDU5IDEuNDc4MiAxLjQ1OXptLTcuMjk1LS44MjU1YzAtLjc4NzEtLjUxODMtMS40NTktMS4zNjMwMi0xLjUxNjYtLjgwNjI5LS4wNTc2LTEuNTM1NzkuNTc1OS0xLjU3NDE5IDEuMzYzLS4wMzgzOS44NDQ3LjU3NTkyIDEuNTM1OCAxLjQwMTQxIDEuNTkzNC44MDYzLjA1NzYgMS41MzU4LS42MTQzIDEuNTM1OC0xLjQzOTh6Ii8+PHBhdGggZD0ibTEzLjY5MzYgMTAuMzE4MmMuNjE0MyAwIDEuMjA5NC0uMDU3NSAxLjgwNDYuMDE5Mi43MTAzLjA5Ni43ODcxLjg4MzEuNTU2NyAxLjMwNTUtLjA5Ni4xNTM1LS4yODguMjQ5NS0uNDAzMi4zNjQ3LjA3NjguMDM4NC4xNzI4LjA3NjguMjY4OC4xMzQ0LjMyNjQuMjExMi40Nzk5LjUxODMuMzg0Ljk1OTktLjA3NjguNDAzMS0uMzI2NC43MTAzLS43Mjk1Ljc2NzktLjYxNDQuMDc2OC0xLjI0NzkuMDU3Ni0xLjg2MjIuMDc2OC0uMDE5Mi0xLjI2NzEtLjAxOTItMi40NTczLS4wMTkyLTMuNjI4NHptLjc2NzkgMi45OTQ4Yy4yMTEyIDAgLjQyMjMuMDE5Mi42MzM1IDAgLjI4OC0uMDM4NC40MjI0LS4yMTExLjQyMjQtLjUxODMgMC0uMzA3MS0uMTM0NC0uNTM3NS0uNDAzMi0uNTc1OS0uMjExMi0uMDE5Mi0uNDQxNSAwLS42NTI3IDB6bTAtMi40Mzh2Ljk5ODJoLjQ5OTFjLjI2ODggMCAuNDAzMi0uMTcyNy40MjI0LS40MjIzLjAxOTItLjMyNjQtLjEzNDQtLjUzNzUtLjM4NC0uNTU2Ny0uMTkxOS0uMDM4NC0uMzQ1NS0uMDE5Mi0uNTM3NS0uMDE5MnoiLz48cGF0aCBkPSJtMTMuMDYwNyAxMy44ODc0Yy0uMjQ5Ni0uMDE5Mi0uNTM3Ni4xMzQ0LS42NzItLjIzMDMtLjA5NTkuMDM4NC0uMTUzNS4wNzY4LS4yMzAzLjExNTEtLjU3NTkuMzA3Mi0xLjE5MDMuMTE1Mi0xLjQzOTgtLjQ3OTktLjIxMTItLjQ3OTktLjIxMTItLjk1OTkuMDM4NC0xLjQyMDYuMzA3MS0uNTM3NS44NjM5LS42NTI3IDEuNDM5OC0uNTM3NS4wNTc2LjAxOTIuMDk2LjAzODQuMTkxOS4wNTc2IDAtLjIxMTIgMC0uMzg0IDAtLjU1NjggMC0uMTcyNyAwLS4zNDU1IDAtLjUzNzVoLjY3MnptLS42OTExLTEuMzI0NmMwLS4xNTM2IDAtLjMwNzEgMC0uNDQxNSAwLS4wNTc2LS4wMTkyLS4xMTUyLS4wMzg0LS4xNTM2LS4yNjg4LS4yMzA0LS44ODMxLS4yMzA0LS45NzkxLjIzMDQtLjAzODQuMTcyNy0uMDU3Ni4zNjQ3LS4wMzg0LjU1NjcuMDM4NC40OTkxLjQ2MDcuNzI5NS45MDIzLjQ5OTEuMTE1Mi0uMDU3Ni4xOTE5LS4xMzQ0LjE3MjctLjI2ODctLjAzODMtLjE1MzYtLjAxOTEtLjI4OC0uMDE5MS0uNDIyNHoiLz48cGF0aCBkPSJtMTAuMzE0NyAxMi43NTk0Yy0uNjUyNzUgMC0xLjI2NzA3IDAtMS44NjIxOCAwIC4wMTkxOS4zMjYzLjI0OTU2LjU5NTEuNTk1MTEuNTc1OS4zMDcxNi0uMDE5Mi42MTQzMi0uMDc2OC45NDA2OC0uMTM0NHYuNDYwN2MwIC4wMzg0LS4wMzg0LjA5Ni0uMDU3Ni4xMTUyLS41NTY3Mi4yNjg4LTEuNTkzMzguMzA3Mi0yLjAzNDkyLS40NDE1LS4yNjg3Ni0uNDc5OS0uMjMwMzctMS4xOTAzLjA5NTk5LTEuNjEyNi4zNDU1NS0uNDQxNS45MjE0Ny0uNjE0MyAxLjQ3ODItLjQ0MTUuNDIyMzQuMTM0My42NTI3Mi40NjA3Ljc2NzkyLjg4My4wMzg0LjE5Mi4wMzg0LjM2NDguMDc2OC41OTUyem0tLjcxMDM0LS4zNDU2Yy4wMzgzOS0uMjg3OS0uMjQ5NTctLjU5NTEtLjU1NjczLS41OTUxLS4zNjQ3NS0uMDE5Mi0uNjE0MzEuMjExMi0uNjE0MzEuNTk1MXoiLz48cGF0aCBkPSJtMTguNDUzOSAxMy45MDY5Yy0uMDE5Mi0uMDk2LS4wMTkyLS4xNzI4LS4wMTkyLS4yNjg4LS4wOTU5LjA1NzYtLjE5MTkuMDk2LS4yNjg3LjEzNDQtLjIzMDQuMTE1Mi0uNDguMjExMi0uNzQ4Ny4xNTM2LS4zNjQ4LS4wNzY4LS41OTUxLS4yODgtLjYxNDMtLjY3MTktLjAxOTItLjYxNDMgMC0xLjIyODcgMC0xLjg2MjJoLjY3MTl2LjE5MiAxLjI0NzhjMCAuMzY0OC4yMTExLjUzNzYuNTc1OS40NjA4LjMwNzItLjA1NzYuNDAzMS0uMTkyLjQwMzEtLjUxODQgMC0uNDYwNyAwLS45MDIyIDAtMS4zODIyaC42NzJjMCAuMDU3Ni4wMTkyLjEzNDQuMDE5Mi4xOTJ2Mi4xMTE3YzAgLjE1MzYtLjAzODQuMjExMi0uMjExMi4yMTEyLS4xNzI4LS4wMTkyLS4zMjY0IDAtLjQ4IDB6Ii8+PHBhdGggZD0ibTE5LjYyNDUgMTMuNzk1YzAtLjI0OTYgMC0uNDQxNiAwLS41OTUyLjMwNzIuMDU3Ni42MTQzLjExNTIuOTIxNS4xNTM2LjA3NjguMDE5Mi4xNzI4IDAgLjIzMDQtLjAzODQuMDc2Ny0uMDU3Ni4xOTE5LS4xNTM2LjIxMTEtLjIzMDMgMC0uMDc2OC0uMDk2LS4yMTEyLS4xOTE5LS4yMzA0LS4xOTItLjA1NzYtLjQwMzItLjA3NjgtLjU5NTItLjExNTItLjUzNzUtLjExNTItLjcyOTUtLjc2NzktLjM2NDctMS4xNzEuMjExMi0uMjQ5Ni40Nzk5LS4zNDU2LjgwNjMtLjM0NTYuMjMwMyAwIC40NjA3LjAzODQuNjkxMS4wNzY4LjAzODQgMCAuMDk2LjA3NjguMDk2LjExNTIuMDE5Mi4xNzI4IDAgLjMyNjMgMCAuNDk5MS0uMjQ5Ni0uMDM4NC0uNDk5Mi0uMDc2OC0uNzQ4Ny0uMTE1Mi0uMDc2OCAwLS4xNTM2IDAtLjIxMTIuMDM4NC0uMDc2OC4wMzg0LS4xNzI4LjEzNDQtLjE1MzYuMTkyIDAgLjA1NzYuMDk2LjE3MjguMTcyOC4xOTIuMTUzNi4wNTc2LjMyNjMuMDU3Ni40OTkxLjA5Ni4zMjY0LjA1NzYuNTU2Ny4yMTExLjY1MjcuNTM3NS4wOTYuMzI2My0uMDU3Ni42OTExLS4zMjYzLjkwMjMtLjI2ODguMjExMS0uNTk1MS4yMzAzLS45MjE1LjE5MTktLjI2ODgtLjAzODQtLjUxODMtLjExNTEtLjc2NzktLjE1MzV6Ii8+PHBhdGggZD0ibTUuODQyNjggMTEuMzc2OC42OTExMS0uMDU3NmMwIC4wNzY4LjAxOTIuMTM0NC4wMTkyLjIzMDQuMDk1OTktLjA1NzYuMTcyNzgtLjA3NjguMjMwMzctLjEzNDQuMjExMTctLjEzNDQuNDIyMzQtLjE3MjguNjcxOTEtLjEzNDQuMDU3NTkgMCAuMTE1MTkuMDc2OC4xMTUxOS4xMzQ0LjAxOTE5LjIxMTIgMCAuNDIyNCAwIC41OTUxLS4yMzAzNy0uMDE5Mi0uNDYwNzQtLjA1NzYtLjY5MTExLS4wMTkyLS4yODc5Ni4wMzg0LS4zNjQ3NS4xNTM2LS4zNjQ3NS40NDE2djEuNDU5Yy0uMjExMTggMC0uNDAzMTUgMC0uNTk1MTMgMC0uMDM4MzkgMC0uMDk1OTgtLjExNTItLjA5NTk4LS4xNTM2IDAtLjY3MTkgMC0xLjMyNDYgMC0xLjk5NjUuMDE5MTktLjExNTIuMDE5MTktLjIzMDQuMDE5MTktLjM2NDh6Ii8+PC9nPjwvc3ZnPg==" className="amozon" style={{ marginLeft: "520px",marginTop: "189px"}}/></div></div></div>
       <div className="gYNVsu"> <div className="lll"><div className="vgp"><img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMjcgMjciIHdpZHRoPSIyNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSIjZWUyZTI0IiBoZWlnaHQ9IjI2IiByeD0iNi40MDYiIHdpZHRoPSIyNiIgeD0iLjQ2IiB5PSIuNjAyIi8+PHBhdGggZD0ibTE5LjQyODQgMTYuNzI3NWMxLjcxMDYgMCAzLjEwMjUtMS40MDEgMy4xMDI1LTMuMTIyOCAwLTEuNzIyOS0xLjM5MTktMy4xMjI5LTMuMTAyNS0zLjEyMjktMS43MTA5IDAtMy4xMDI0IDEuNC0zLjEwMjQgMy4xMjI5IDAgMS43MjE4IDEuMzkxNSAzLjEyMjggMy4xMDI0IDMuMTIyOHptMC00LjIzNjRjLjYwOTYgMCAxLjEwNjEuNDk5NSAxLjEwNjEgMS4xMTMycy0uNDk2OCAxLjExMjYtMS4xMDY0IDEuMTEyNmMtLjYxIDAtMS4xMDU4LS40OTg5LTEuMTA1OC0xLjExMjkgMC0uNjE0NC40OTYyLTEuMTEzNiAxLjEwNTgtMS4xMTM2em0tMTEuNzA1MDggNC4yMzY0YzEuNzEwNjEgMCAzLjEwMjQ4LTEuNDAxIDMuMTAyNDgtMy4xMjI4IDAtMS43MjI5LTEuMzkxODctMy4xMjI5LTMuMTAyNDgtMy4xMjI5LTEuNzEwMjcgMC0zLjEwMjQ3IDEuNC0zLjEwMjQ3IDMuMTIyOSAwIDEuNzIxOCAxLjM5MjIgMy4xMjI4IDMuMTAyNDcgMy4xMjI4em0wLTQuMjM2NGMuNjA5OTYgMCAxLjEwNjA4LjQ5OTUgMS4xMDYwOCAxLjExMzJzLS40OTYxMiAxLjExMjYtMS4xMDYwOCAxLjExMjZjLS42MDk2MiAwLTEuMTA1NDEtLjQ5ODktMS4xMDU0MS0xLjExMjkgMC0uNjE0NC40OTYxMy0xLjExMzYgMS4xMDU0MS0xLjExMzZ6bTUuODUwODgtLjA3MDMtLjk1MjUtMS44OTgyaC0yLjIzMDJsMi4wODMgNC4xNTI1djEuOTU0OWgyLjE5OTZ2LTEuOTU0OWwyLjA4MzEtNC4xNTI1aC0yLjIzMTJsLS45NTE1IDEuODk4MnoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=" className="amozon" style={{ marginLeft: "600px",marginTop: "189px"}}/></div></div></div>
       <div className="gYNVsu"> <div className="lll"><div className="vgp"><img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMjcgMjciIHdpZHRoPSIyNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJtNCA0aDIwdjIwaC0yMHoiLz48L2NsaXBQYXRoPjxyZWN0IGZpbGw9IiNlYWVjZjYiIGhlaWdodD0iMjYiIHJ4PSI2LjQwNiIgd2lkdGg9IjI2IiB4PSIuODg2IiB5PSIuNjAyIi8+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48ZyBmaWxsPSIjNGJhZDRmIj48cGF0aCBkPSJtMjIuNjQzMyAxOS4wNzU3Yy44NzctMS40Njg5IDEuMzg2MS0zLjIyMDMgMS4zODYxLTUuMDU2NSAwLTIuMzQ0Ni0uNzkyLTQuNTE5NzUtMi4xNzgyLTYuMjE0NjdsLTYuODE3NSAxMS4yNzExN3oiLz48cGF0aCBkPSJtMjAuNzQ4NSA2LjU5Mzc3Yy0xLjc1MzktMS42MTAxNy00LjEzMDItMi41OTg4Ny02LjczMjctMi41OTg4Ny0yLjk3MDMgMC01LjYyOTQ0IDEuMjk5NDQtNy40NjgxOSAzLjM2MTU4aDkuMjIyMDlsLTguNDMwMDIgMTQuMDk2MDJjMS43NTM4OSAxLjYxMDIgNC4xMDE4MiAyLjU3MDYgNi43MDQ0MiAyLjU3MDYgMi45NzAzIDAgNS42ODYtMS4yOTk0IDcuNDk2NC0zLjM2MTVoLTkuMzA2OXoiLz48cGF0aCBkPSJtNS4zODgzMyA4LjkzNzE2Yy0uODc2OTQgMS40Njg5NC0xLjM4NjEzIDMuMTkyMTQtMS4zODYxMyA1LjA1NjU0IDAgMi4zNzI4LjgyMDM2IDQuNTQ4IDIuMjA2NSA2LjI3MTJsNi43ODkzLTExLjMyNzc0eiIvPjwvZz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtNy4zNDA2MSAyMS40NTMzIDguNDI5OTktMTQuMDY3NzRoLTkuMjIyMDdjLS40MjQzMi40ODAyMi0uNzkyMDguOTg4Ny0xLjEzMTU0IDEuNTgxOTJoNy42Mzc5MWwtNi44MTc1NCAxMS4yOTk0MmMuMzM5NDYuMzk1NS42Nzg5Mi43OTEgMS4xMDMyNSAxLjE4NjR6Ii8+PHBhdGggZD0ibTIwLjc0OSA2LjU5NzM1LTguNDg2NSAxNC4wMTEyNWg5LjI3ODZjLjQyNDMtLjQ4MDIuNzkyMS0uOTg4NiAxLjEzMTUtMS41ODE5aC03LjYzNzlsNi44MTc2LTExLjI5OTQxYy0uMzM5NS0uMzY3MjMtLjY3OS0uNzkwOTYtMS4xMDMzLTEuMTI5OTR6Ii8+PC9nPjwvZz48L3N2Zz4=" className="amozon" style={{ marginLeft: "680px",marginTop: "189px"}}/></div></div></div>
       <div className="gYNVsu"> <div className="lll"><div className="vgp"><img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMjggMjciIHdpZHRoPSIyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSIjZTIzNzQ0IiBoZWlnaHQ9IjI2IiByeD0iNi40MDYiIHdpZHRoPSIyNi42OTIiIHg9Ii40ODYiIHk9Ii4wMjciLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtNi4zNTgyNyAxMS45NzIxLS4wMTkxMi41OTE0LTEuNTgyMzggMS42NzY0Yy42NTk3MyAwIDEuMDgwNDItLjAwNDcgMS4zMTk0NS0uMDE4Ny0uMDcxNzEuMzE2Ny0uMTI5MDguNTc3NS0uMTg2NDUuOTY4Ni0uMzE1NTEtLjAyNzktLjgxMjctLjAzMjYtMS4zMDk4OC0uMDMyNi0uNTU0NTUgMC0xLjAzNzM5LjAwNDctMS40MjQ2Mi4wMzI2bC4wMTQzNS0uNTk2IDEuNTgyMzctMS42NjcxYy0uNjkzMTggMC0uOTQ2NTYuMDA0Ni0xLjIzMzM5LjAxMzkuMDYyMTUtLjI5OC4xMDk5NS0uNjI4Ni4xNTI5OC0uOTU5Mi41MDY3NC4wMDkzLjcwNzUzLjAxODYgMS4zNTc2OS4wMTg2LjYwNzEzIDAgLjk0NjU2LS4wMDkzIDEuMzI5LS4wMjc5em0xLjEyMzQ0IDEuODUzM2MwIC4zOTU4LjEzMzg2LjU5NjEuMzYzMzMuNTk2MS4zMDU5NiAwIC41NDQ5OS0uNDc5Ny41NDQ5OS0xLjA2NjQgMC0uNDAwNS0uMTMzODYtLjU5NjEtLjM1Mzc3LS41OTYxLS4zMDU5NiAwLS41NTQ1NS40NzUtLjU1NDU1IDEuMDY2NHptMi4wNzk1Ni0uNTE2OWMwIDEuMDc1Ny0uNzc5MjMgMS45NzQ0LTEuODE2NjIgMS45NzQ0LS45Mjc0NCAwLTEuNDA1NS0uNjE0Ni0xLjQwNTUtMS40MjAyIDAtMS4wNzExLjc4ODgtMS45NjUxIDEuODE2NjMtMS45NjUxLjk0MTc3IDAgMS40MDU0OS42MTQ2IDEuNDA1NDkgMS40MTA5em0xMi40NDM5My41MTY5YzAgLjM5NTguMTMzOC41OTYxLjM2MzMuNTk2MS4zMDU5IDAgLjU0NS0uNDc5Ny41NDUtMS4wNjY0IDAtLjQwMDUtLjEzMzktLjU5NjEtLjM1MzgtLjU5NjEtLjMwNTkgMC0uNTU0NS40NzUtLjU1NDUgMS4wNjY0em0yLjExNzgtLjUzNTVjMCAxLjA4OTctLjc5MzYgMS45OTc3LTEuODQwNiAxLjk5NzctLjk0MTcgMC0xLjQxOTgtLjYyNC0xLjQxOTgtMS40Mzg5IDAtMS4wODUuNzk4NC0xLjk5MzEgMS44NDA1LTEuOTkzMS45NTE0IDAgMS40MTk5LjYyNCAxLjQxOTkgMS40MzQzem0tOS4yMjE4LS4zNDkzYy4wODEzLS41NTQxLjAzODItMS4wNTI0LS41OTI4LTEuMDUyNC0uNDU4OSAwLS45NTEzLjM3NzItMS4zMDAzIDEuMDA1OS4wNzY1LS41MjE2LjAzMzQtMS4wMDU5LS41OTI4LTEuMDA1OS0uNDY4NSAwLS45OC4zOTU5LTEuMzI5IDEuMDUyNC4wOTA4LS40Mjg0LjA3MTctLjkxNzMuMDQzLTEuMDE5OC0uMzYzMy4wNjA2LS42Nzg4LjA5MzItMS4xMjM0LjEwMjUuMDE0My4yOTgtLjAwNDguNjg5Mi0uMDYyMTggMS4wNTdsLS4xNDgyLjk3MzNjLS4wNTczNy4zODE4LS4xMTk1MS44MjQyLS4xODY0NCAxLjEwMzZoMS4xODA4MmMuMDA0OC0uMTY3Ni4wNTI2LS40MzMxLjA4MTMtLjY3MDVsLjEwMDMtLjY3MDZjLjA4MTMtLjQzMzEuNDM5OS0uOTUuNzEyNC0uOTUuMTU3NyAwIC4xNTI5LjE0OTEuMTA5OS40Mjg1bC0uMTE0Ny43NTQzYy0uMDU3NC4zODE5LS4xMTk1LjgyNDMtLjE4NjUgMS4xMDM3aDEuMTk1MmMuMDA0OC0uMTY3Ny4wNDMtLjQzMzEuMDc2NS0uNjcwNmwuMTAwNC0uNjcwNmMuMDgxMi0uNDMzLjQzOTgtLjk0OTkuNzEyMy0uOTQ5OS4xNTc3IDAgLjE1My4xNDQzLjEyOS4zMzUzbC0uMjg2OCAxLjk0NjRoMS4wOXptNS43MDMzIDEuMzAzOS0uMTI5MS43Njg0Yy0uMTk2LjEwMjQtLjU2NDEuMjUxNC0uOTg5Ni4yNTE0LS43MjE5IDAtLjg3MDEtLjM3NzItLjc1NTMtMS4xNzM1bC4xODY0LTEuMjg1MmgtLjM1ODVsLjEwMDMtLjgzMzUuMzg3My0uMDE4Ny4xNDgyLS42MDUzIDEuMDk5NS0uNDAwNS0uMTM4NiAxLjAwNThoLjc1NTNjLS4wMjM5LjEwMjUtLjExNDcuNjc1My0uMTM4Ni44NTIyaC0uNzM2MmwtLjE2NzQgMS4xODc1Yy0uMDQzLjMwNzMtLjAxOTEuNDE0NC4xOTYuNDE0NC4xNjI2IDAgLjM5NjgtLjA5MzEuNTQwMy0uMTYzeiIvPjxwYXRoIGQ9Im0xNi40Mzk1IDE0LjYwNzFjLjQwMTYtLjA0NjUuNjc0MS0uNDIzNy43NDEtLjc5NjNsLjAwOTYtLjEwMjRjLS4xNzIxLS4wMzczLS40MjA3LS4wNjUyLS42NTk3LS4wMzczLS4yMjk1LjAyOC0uNDIwNy4xMjExLS41MjExLjI1NjItLjA3NjUuMDk3Ny0uMTE0OC4yMTQyLS4xMDA0LjM0OTIuMDIzOS4yMDQ5LjI1ODEuMzYzMi41MzA2LjMzMDZ6bS0uMzQ0Mi41OTYxYy0uNTY0MS4wNjk4LS45MzctLjE0OS0xLjA0NjktLjY0NzMtLjA3MTctLjMxMi4wMjg3LS42NjU5LjE5Ni0uODgwMS4yMjk0LS4yNzk0LjU5NzUtLjQ1NjQgMS4wNTE3LS41MTIyLjM2MzMtLjA0MTkuNjY5My0uMDIzMy45NTYxLjAzMjZsLjAxNDQtLjA0NjZjLjAwOTUtLjA3NDUuMDE0My0uMTUzNy4wMDQ3LS4yNDY4LS4wMjg2LS4yMzI4LS4yMTk5LS4zNzcyLS42ODg0LS4zMjEzLS4zMTU1LjAzNzItLjYyMTQuMTQ5LS44NTU3LjI3NDdsLS4yMjk1LS42NzA1Yy4zMTU2LS4xNzcuNzE3MS0uMzEyIDEuMTc2MS0uMzY3OS44NzQ4LS4xMDcxIDEuNDkxNS4xNjc2IDEuNTY4Ljc5MTYuMDE5MS4xNjc3LjAyMzkuMzQ0NiAwIC41MDI5LS4xMTQ3Ljc3My0uMTg2NCAxLjM1NTEtLjIxNTEgMS43NDYzLS4wMDQ4LjA2MDUtLjAwNDguMTYzIDAgLjMxMmgtMS4wODUyYy4wMjM5LS4wNjA2LjA0My0uMTQ0NC4wNjIxLS4yNDY4LjAxNDQtLjA2OTkuMDE5Mi0uMTUzNy4wMjg3LS4yNjA4LS4yMjQ3LjMwNzMtLjU0MDIuNDkzNi0uOTM3LjU0MDJ6Ii8+PC9nPjwvc3ZnPg==" className="amozon" style={{ marginLeft: "760px",marginTop: "189px"}}/></div></div></div>
       </div>
       
       <div>
       <div className="bysyth" style={{marginTop:"22px"}} >
       <div className="gYNVsu"> <div className="lll"><div className="vgp"><img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMjggMjciIHdpZHRoPSIyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSIjZWY2OTIzIiBoZWlnaHQ9IjI2IiByeD0iNi40MDYiIHdpZHRoPSIyNi42OTIiIHg9Ii42MDQiIHk9Ii4wMjciLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtMTAuODc3MiAxMS4xNTM3Yy0uMDAwNi0uMTQ4OS0uMDE4MS0uMjk1OS0uMDUyLS40NDEtLjAxNDUtLjA3NDMtLjAzNTMtLjE0NjgtLjA2MjgtLjIxNzQtLjAyNzQtLjA3MDctLjA2MDktLjEzODYtLjEwMDQtLjIwMzUtLjAzOTYtLjA2NTEtLjA4NDUtLjEyNjItLjEzNTEtLjE4MzctLjA1MDMtLjA1NzMtLjEwNTUtLjExMDA2LS4xNjU1LS4xNTgwNC0uMDU5OS0uMDQ3OTktLjEyMzctLjA5MDY4LS4xOTEyLS4xMjc5LS4wNjc2LS4wMzcyMi0uMTM3OC0uMDY4NDQtLjIxMTAxLS4wOTM2Ny0uMDcyOTktLjAyNTQtLjE0Nzc4LS4wNDQxLS4yMjQzOS0uMDU2OC0uMDc2NDItLjAxMjUzLS4xNTM1Ny0uMDE4NTMtLjIzMDktLjAxODE3LS44OTA4NCAwLTEuNTkyNDMuNzk1MzgtMS41OTI0MyAyLjE4NzQ4IDAgMS4xNDYxLjU3ODk4IDIuMDM5MiAxLjU5MjQzIDIuMDM5Mi4wNzMzNC4wMDA3LjE0NjMzLS4wMDQ3LjIxODk1LS4wMTU5LjA3MjI2LS4wMTExLjE0MzQzLS4wMjguMjEzMzQtLjA1MDYuMDY5NzEtLjAyMjYuMTM2OTEtLjA1MDMuMjAxNzEtLjA4MzYuMDY1LS4wMzMzLjEyNjgtLjA3MTYuMTg1My0uMTE0OC4wNTg1LS4wNDMxLjExMy0uMDkwOS4xNjM0LS4xNDI4LjA1MDUtLjA1MTguMDk2My0uMTA3NC4xMzc0LS4xNjY3LjA0MTMtLjA1OTIuMDc3Mi0uMTIxMy4xMDc2LS4xODYyLjAzMDgtLjA2NTEuMDU1OC0uMTMyMi4wNzUtLjIwMTIuMDQ5NC0uMjAzMy4wNzI5LS40MDkyLjA3MDYtLjYxODN6bTIuNTIwMi0zLjEzMTA2Yy0uMDQwOS40OTUzNS0uMDcwNCAxLjE0MjU4LS4wNzA0IDIuMjg4NjZ2NC4yNzc0YzAgMS40Nzg2LS4zMDQ1IDIuNjg2My0xLjE5ODkgMy40NTYzLS44OTQ1Ljc3MDItMi4wMzc4LjkzNjUtMy4xODgzNC45MzY1LS40OTExNC4wMTI0LS45NzcyMi0uMDMwNS0xLjQ1ODA1LS4xMjgyLS40ODA4Mi0uMDk3Ny0uOTQzOS0uMjQ3Ny0xLjM4ODg2LS40NTA0bC40ODYyNS0xLjgwNzZjLjM1MDk4LjE4NTkuNzE5ODguMzI3IDEuMTA2NzIuNDIzNy4zODcwMS4wOTY3Ljc4MDE4LjE0NTkgMS4xNzk2OS4xNDc1IDEuMTU4MTkgMCAyLjA0ODc5LS42MDQgMi4wNDg3OS0yLjAyNDh2LS40OTkxaC0uMDM3MWMtLjEyMy4xNjAyLS4yNjM3LjMwMzgtLjQyMjMuNDMwNy0uMTU4Ny4xMjY4LS4zMzA3LjIzMzMtLjUxNi4zMTk4LS4xODUyNi4wODY0LS4zNzgzMi4xNDk3LS41NzkzNC4xOTAzLS4yMDA4NC4wNDA2LS40MDQwNC4wNTcyLS42MDkyMy4wNDk5LTEuOTQ0ODUgMC0zLjM0MDQyLTEuNTUwOS0zLjM0MDQyLTMuNzI0MSAwLTIuNDgzNzggMS42NDA2LTQuMDM0NzQgMy41NzQyMi00LjAzNDc0LjIxMzctLjAxMzA2LjQyNTIzLjAwMTc2LjYzNDU5LjA0NDQ1LjIwOTM1LjA0MjY5LjQwOTI4LjExMTY3LjU5OTQ4LjIwNzI4LjE5MDMuMDk1NDQuMzY0LjIxMzgxLjUyMTIuMzU1MTEuMTU3Mi4xNDE0Ny4yOTIzLjMwMDU5LjQwNTEuNDc3NzFoLjAzMzVsLjA4MTUtLjkyOTMxeiIvPjxwYXRoIGQ9Im0xNi43MzM2IDExLjg3NzRjMCAxLjMwODcuNTY4MSAyLjMwNjggMS42MTQ3IDIuMzA2OC45NTQgMCAxLjU1ODctLjkzMjggMS41NTg3LTIuMzIxMyAwLTEuMTMxNi0uNDQ5LTIuMjk5NDUtMS41NTUxLTIuMjk5NDUtMS4xNjktLjAwNzI0LTEuNjE4MyAxLjE2NDI1LTEuNjE4MyAyLjMxMzk1em01LjcwMTItLjA5MDRjMCAyLjc5NDktMi4wMzc2IDQuMDkyOS00LjE0MjEgNC4wOTI5LTIuMjk3NyAwLTQuMDgzLTEuNDc1Mi00LjA4My0zLjk3NzEgMC0yLjUwMiAxLjY2NjctNC4wNzgzNyA0LjIwMTgtNC4wNzgzNyAyLjQxOTguMDE4MTcgNC4wMjMzIDEuNjQ1MTcgNC4wMjMzIDMuOTYyNTd6Ii8+PC9nPjwvc3ZnPg==" className="amozon" style={{ marginLeft: "202px",marginTop: "270px"}}/></div></div></div>
        <div className="gYNVsu"> <div className="lll"><div className="vgp"><img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMjggMjciIHdpZHRoPSIyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSIjMjkzODg3IiBoZWlnaHQ9IjI2IiByeD0iNi40MDYiIHdpZHRoPSIyNi42OTIiIHg9Ii43MjEiIHk9Ii4wMjciLz48cGF0aCBkPSJtMTMuNDEzIDcuOTQ3ODJjLjg4NDgtLjI0NjY3IDEuODU0Ny0uMTA5NzggMi42NzA3LjI4ODQ2IDEuMTQzOC42MzY2OSAxLjk4NTUgMS43OTI2MiAyLjE1NzUgMy4wNzMzMi4wMzM1LjUxMjguMDQ2OCAxLjAzMzItLjAyODcgMS41NDMzLS4xMTY1LjUzOTktLjMxNTQgMS4wNjY4LS42IDEuNTQzMi0uNzQ3NCAxLjA1MzYtMi4wMTcxIDEuNzg4LTMuMzQ2MyAxLjc4MTQtLjc4MjcuMDAzNy0xLjQ0NDgtLjQzMTEtMi4xMzU2LS43MjEzLS4wNDIgMS4xMTM5LS4wMTYzIDIuMjMtLjAxMjMgMy4zNDUyLS43OTEyLS4wMjI0LTEuNTgyNS0uMDAxMS0yLjM3MzU4LS4wMTQtLjAzODIzLTMuNTY2Ny4wMDU3NC03LjEzMzQtLjAyMjgtMTAuNzAwMDcuNzM4NTgtLjAwNDU1IDEuNDc2MTggMCAyLjIxMzc4LS4wMDU1OS4wMTYyLjE4MTQ2LjAzMzYuMzYyMDUuMDUyNi41NDM1MS40NjE2LS4yNDkyOS45MDI5LS41NTY0NSAxLjQyNDctLjY3NzQzem0tLjE0NTIgMi4yMTE0OGMtLjU2NjYuMjg0OC0xLjE2OTYuNzU1Ny0xLjIxNDUgMS40MjQxLS4wNzY1LjU2MTItLjAxMDYgMS4xNzU3LjM1MzUgMS42MzgyLjQ2NTQuNjA5NiAxLjMxNTguODM2NyAyLjA2Mi43MDA5LjQ2ODMtLjA4MjkuODMxMy0uNDIwNiAxLjEzMDMtLjc1ODYuNDYwNi0uNTI3OS40NDkxLTEuMjk5NC4yNjEtMS45MzAzLS4zMzcyLTEuMDA3My0xLjYyNDQtMS40MjMyNC0yLjU5MjMtMS4wNzQzeiIgZmlsbD0iI2ZmZiIvPjxnIGZpbGw9IiMyMmJlZWUiPjxwYXRoIGQ9Im0yMC43MjUgOS44MjgwOGMxLjE2MjgtLjI5MzE3IDIuNDQzMi41NjU5MiAyLjYzMzQgMS43MDg4Mi4xNDM0LjY5NjItLjEyNDIgMS40MzM0LS42NTI3IDEuOTE0NS0uODc2Mi45NTQyLTIuNjExNS43MDY2LTMuMzEyOS0uMzI4NS0uNTgyOC0uNzk2OC0uNDkzLTEuOTg2My4yMTc5LTIuNjgyNC4yOTA1LS4zMTY1LjY5OTQtLjUwMjYzIDEuMTE0My0uNjEyNDJ6Ii8+PHBhdGggZD0ibTYuMTc0NzMgOS44MjgwOGMxLjE2MjgxLS4yOTMxNyAyLjQ0MzE3LjU2NTkyIDIuNjMzNDEgMS43MDg4Mi4xNDM0LjY5NjItLjEyNDE5IDEuNDMzNC0uNjUyNzQgMS45MTQ1LS44NzYxOS45NTQyLTIuNjExNTIuNzA2Ni0zLjMxMjktLjMyODUtLjU4Mjc1LS43OTY4LS40OTMwMi0xLjk4NjMuMjE3ODgtMi42ODI0LjI5MDU2LS4zMTY1LjY5OTQxLS41MDI2MyAxLjExNDM1LS42MTI0MnoiLz48L2c+PC9zdmc+" className="amozon" style={{ marginLeft: "280px",marginTop: "270px"}}/></div></div></div>
        <div className="gYNVsu"> <div className="lll"><div className="vgp"><img src="https://www.acko.com/home-next/images?url=https%3A%2F%2Facko-home-prod.ackoassets.com%2Fnext_assets%2F5ce5234a43ed2b5d41ff9ba5bf62a3e996e5d026%2F_next%2Fstatic%2Fimages%2Fabhibus-86291e9c42652e1e45ffc7fda8bb17e7.svg&w=128&q=75" className="amozon" style={{ marginLeft: "360px",marginTop: "270px"}}/></div></div></div>
       <div className="gYNVsu"> <div className="lll"><div className="vgp"><img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMjggMjciIHdpZHRoPSIyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSIjNmFhYjNkIiBoZWlnaHQ9IjI2IiByeD0iNi40MDYiIHdpZHRoPSIyNi42OTIiIHg9Ii45NTYiIHk9Ii4wMjciLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtNy44NzAxMiA4LjE4ODA2aDcuMzI3MThjLjI0NDIgMCAuNTQ5NS0uMTE4OTUuNzMyNy0uMjk3MzhsMS4xNjAxLTEuMTMwMDZoLTcuMzg4MTljLS43OTM3OCAwLTEuNjQ4NjEuNzEzNzItMS44MzE3OSAxLjQyNzQ0eiIvPjxwYXRoIGQ9Im04LjkxMDQgMTAuNzQ5M2gzLjY2MzZjLjI0NDIgMCAuNTQ5NS0uMTE5LjczMjctLjI5NzRsMS4xNjAxLTEuMTMwMDZoLTMuNzI0NmMtLjc5Mzc5IDAtMS42NDg2Mi43MTM3Ni0xLjgzMTggMS40Mjc0NnoiLz48cGF0aCBkPSJtMTQuNTg2NyAxNS45MTgyLTMuMzU4MyAzLjI3MTJjLS4zNjY0LjM1NjktLjg1NDguNTk0OC0xLjQwNDM3LjU5NDgtMS4wOTkwOCAwLTEuOTUzOTEtLjgzMjctMS45NTM5MS0xLjkwMzMgMC0xLjA3MDUuODU0ODMtMS45MDMyIDEuOTUzOTEtMS45MDMyaDQuNzYyNjciLz48cGF0aCBkPSJtMTkuMjI4OSA2Ljc2MDYyYy0uNTQ5NiAwLTEuMDk5MS4yMzc5MS0xLjQ2NTUuNTk0NzdsLTguNTQ4MzEgOC4zMjY3MWMuMTgzMTgtLjA1OTUuMzY2MzYtLjA1OTUuNjEwNTktLjA1OTVoNS4wNjc5Mmw1LjczOTYtNS42NTAyNGMuMzY2NC0uMzU2ODYuNTQ5Ni0uODMyNjguNTQ5Ni0xLjM2Nzk3LjA2MS0xLjAxMTEtLjg1NDgtMS44NDM3Ny0xLjk1MzktMS44NDM3N3oiLz48cGF0aCBkPSJtMTQuNzY5NiAxNi4xNTYxLTMuMjk3MiAzLjIxMThzLS4zMDUzLjM1NjgtLjQ4ODUuMzU2OGgxMC4yNThjLS4xODMyLTIuMTQxMS0yLjA3Ni0zLjgwNjUtNC4zMzUyLTMuODA2NWgtMS40MDQ0LS41NDk1eiIvPjwvZz48L3N2Zz4=" className="amozon" style={{ marginLeft: "440px",marginTop: "270px"}}/></div></div></div>
       <div className="gYNVsu"> <div className="lll"><div className="vgp"><img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMjcgMjciIHdpZHRoPSIyNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjcuOTA5IiB4Mj0iMTguMjExIiB5MT0iMTguMDA1IiB5Mj0iNy40MjkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzQ0ZTA4ZCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzY5ZiIvPjwvbGluZWFyR3JhZGllbnQ+PHJlY3QgZmlsbD0iI2VhZWNmNiIgaGVpZ2h0PSIyNiIgcng9IjYuNDA2IiB3aWR0aD0iMjYuNjkyIiB4PSIuMDczIiB5PSIuMDI3Ii8+PHBhdGggZD0ibTE4LjM0NDkgNS4yMjE2NWgtMTAuMzI2MjJjLTEuNDQzOCAwLTIuNjA1MTEgMS4xMzEyLTIuNjA1MTEgMi41Mzc1NnYxMC4wODkwOWMwIDEuNDA2NCAxLjE2MTMxIDIuNTM3NiAyLjYwNTExIDIuNTM3NmgxMC4zMjYyMmMxLjQ0MzggMCAyLjYwNTEtMS4xMzEyIDIuNjA1MS0yLjUzNzZ2LTEwLjA4OTA5Yy4wMzE0LTEuNDA2MzYtMS4xMjk5LTIuNTM3NTYtMi42MDUxLTIuNTM3NTZ6bTEuODUxOCAxMi42MjY2NWMwIC45NzgzLS44MTYgMS44MDM4LTEuODUxOCAxLjgwMzhoLTEwLjMyNjIyYy0xLjAwNDM4IDAtMS44NTE4Mi0uNzk0OS0xLjg1MTgyLTEuODAzOHYtMTAuMDg5MDljMC0uOTc4MzQuODE2MDUtMS44MDM4MSAxLjg1MTgyLTEuODAzODFoMTAuMzI2MjJjMS4wMDQ0IDAgMS44NTE4Ljc5NDkgMS44NTE4IDEuODAzODF6IiBmaWxsPSIjNjlmIi8+PHBhdGggZD0ibTE5LjQ0MzkgOS43NDYxMWMwIC44ODY1OS0uMzQ1MiAxLjU4OTc5LS45NDE2IDIuMTQwMDktLjQzOTQuNDI4LS45NzMuNjcyNi0xLjYwMDcuNzY0NC0uMjUxMS4wMzA1LS41MzM2LjAzMDUtLjc4NDcuMDYxMS0uNTMzNS4wMzA2LTEuMDk4NS4xMjIzLTEuNjAwNy4yNzUyLS42OTA1LjIxNC0xLjA2NzEuNjcyNi0xLjIyNDEgMS4zNDUyLS4xMjU1LjUxOTctLjE4ODMgMS4wMzk1LS4yMTk3IDEuNTU5Mi0uMDYyOC44MjU1LS4zNDUyIDEuNTI4Ni0uOTczIDIuMTA5NS0uNDcwOC40MjgxLTEuMDA0My42NzI2LTEuNjAwNy43MzM4LS44MTYwNS4wOTE3LTEuNTY5MzMtLjA2MTItMi4yMjg0NS0uNTUwMy0uNjU5MTMtLjQ4OTItMS4wMzU3Ny0xLjE2MTgtMS4xNjEzMi0xLjk1NjctLjI1MTA5LTEuMzc1OC42OTA1MS0yLjg0MzMgMi4yNTk4NS0zLjIxMDIuMjUxMS0uMDYxMS41MzM1OC0uMDkxNy43ODQ3Mi0uMDkxNy42Mjc3LS4wMzA2IDEuMjI0LS4wOTE3IDEuODIwNC0uMjQ0Ni42OTA1LS4xNTI4IDEuMDk4NS0uNTgwOSAxLjI4NjgtMS4yNTM1LjE1Ny0uNDg5MS4yMTk4LTEuMDA4OS4xODg0LTEuNTI4NjItLjA5NDItMS40Njc1MS45NzMtMi43NTE1NyAyLjQ0ODEtMy4wMjY3MyAxLjUwNjYtLjI3NTE2IDIuOTUwNC41ODA4OSAzLjM4OTggMi4wMTc4Mi4wMzE0LjEyMjI5LjA2MjguMjQ0NTguMDk0Mi4zOTc0NS4wMzE0LjE4MzQ0LjA2MjcuMzY2ODcuMDYyNy40NTg1OXoiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJtMTYuODM4NCAxOC44MDA1Yy0xLjQxMjQgMC0yLjU3MzgtMS4xMzEyLTIuNTczOC0yLjUwN3MxLjE2MTQtMi41Mzc2IDIuNjA1Mi0yLjUwN2MxLjQxMjQgMCAyLjU3MzcgMS4xMDA2IDIuNTczNyAyLjUwNyAwIDEuMzc1OC0xLjE2MTMgMi41MDctMi42MDUxIDIuNTA3eiIgZmlsbD0iI2ZmYzg0MCIvPjxwYXRoIGQ9Im05LjYxOTg2IDExLjg4NjVjLTEuNDEyNDEgMC0yLjU3MzcyLTEuMTMxMi0yLjU3MzcyLTIuNTA2OTUgMC0xLjM3NTc5IDEuMTYxMzEtMi41MDY5OSAyLjU3MzcyLTIuNTA2OTkgMS40NDM3NCAwIDIuNTczNzQgMS4xMzEyIDIuNTczNzQgMi41MDY5OSAwIDEuMzc1NzUtMS4xNjEzIDIuNTA2OTUtMi41NzM3NCAyLjUwNjk1eiIgZmlsbD0iI2Y0NWQ1ZCIvPjwvc3ZnPg==" className="amozon" style={{ marginLeft: "520px",marginTop: "270px"}}/></div></div></div>
       <div className="gYNVsu"> <div className="lll"><div className="vgp"><img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMjcgMjciIHdpZHRoPSIyNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSIjZWFlY2Y2IiBoZWlnaHQ9IjI2IiByeD0iNi40MDYiIHdpZHRoPSIyNiIgeD0iLjE5MSIgeT0iLjAyNyIvPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0ibTIxLjQ0MzcgNy44MjQ1OGgtMi42MDczbC0zLjAwMTYgMy42ODgzMi0uOTI0NSAxLjI3Njd2LTQuOTY1MDJoLTIuMzQ5NHYxMC44NTAwMmgyLjM0OTR2LTMuODc0bC45OTI5LS42OTc3IDIuOTAyNyA0LjU3MTdoMi42NjhsLTMuODk1Ny02LjA0ODN6bS0xNC4yMjE5MSAwaC0yLjM0OTcydjEwLjg1MDAyaDYuODQzOTN2LTEuOTAwMWgtNC40OTQyMXoiIGZpbGw9IiMyOTRlOWIiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Im0xNC44NzI4IDEyLjcyNzF2Mi4wOTE2bDEuMDQ1OC0uNzE5IDEuNjk5NC0xLjUwMzMgMy44NTYzLTQuNzcxNDJoLTIuNjc5OGwtMi44MTA2IDMuNDY0MTJ6IiBmaWxsPSIjZmY3MDAwIi8+PC9zdmc+" className="amozon" style={{ marginLeft: "600px",marginTop: "270px"}}/></div></div></div>
       <div className="gYNVsu"> <div className="lll"><div className="vgp"><img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMjggMjciIHdpZHRoPSIyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSIjZWFlY2Y2IiBoZWlnaHQ9IjI2IiByeD0iNi40MDYiIHdpZHRoPSIyNi42OTIiIHg9Ii42MTYiIHk9Ii4wMjciLz48cGF0aCBkPSJtMTguNTY4OCA5LjUzMDI0aC04Ljc1MTkxdjEuNDgxMTZoOC43NTE5MXoiIGZpbGw9IiMwMDAxMDIiLz48cGF0aCBkPSJtMTcuNDg0MiA2LjU5OWMtLjk3NjUtLjM0NDQ0LTIuMjc4NC0xLjM3Nzc4LTMuMjkxLTEuMzc3NzhzLTIuMzUwNy45OTg4OS0zLjMyNzIgMS4zNzc3OGMtLjk0MDI4LjM0NDQ0LTIuMjQyMjIuNDEzMzMtMi4yNDIyMiAxLjg2czEuOTg5MDIgMi4wNjY3IDEuOTg5MDIgMi4wNjY3aDMuNTgwNCAzLjU4MDNzMS45ODkxLS42MjAwMyAxLjk4OTEtMi4wNjY3LTEuMzAyLTEuNTE1NTYtMi4yNzg0LTEuODZ6IiBmaWxsPSIjMDAwMTAyIi8+PHBhdGggZD0ibTE0LjE5MTQgOS43MDE3NmMtMy4zMjcyIDAtNC40MTIxLS42Mi00LjQxMjEtLjYyIDAgMi45Mjc3NCA0LjQxMjEgMy4wMzExNCA0LjQxMjEgMy4wMzExNHM0LjQxMjEtLjA2ODkgNC40MTIxLTMuMDMxMTRjMCAwLTEuMDg0OS42Mi00LjQxMjEuNjJ6IiBmaWxsPSIjMjAxZTFlIi8+PHBhdGggZD0ibTE0LjE5MTQgMTIuMTEyOXMtNC40MTIxLS4wNjg5LTQuNDEyMS0zLjAzMTE0YzAgMCAxLjA4NDkuNjIgNC40MTIxLjYyeiIgZmlsbD0iIzU4NTk1OSIvPjxwYXRoIGQ9Im0xNC4xOTMzIDkuODAzMzdjLTMuNTA4IDAtNC40MTIxNC0uNjItNC40NDgzMS0uNjU0NDQtLjAzNjE2LS4wMzQ0NS0uMDcyMzMtLjA2ODg5LS4wMzYxNi0uMTAzMzQuMDM2MTYtLjAzNDQ0LjA3MjMzLS4wNjg4OC4xNDQ2Ni0uMDM0NDQgMCAwIC45NDAzMS42MiA0LjMzOTgxLjYyczQuMzM5OC0uNjIgNC4zMzk4LS42MmMuMDM2MS0uMDM0NDQuMTA4NS0uMDM0NDQuMTA4NS4wMzQ0NC4wMzYxLjAzNDQ1LjAzNjEuMTAzMzQtLjAzNjIuMTAzMzQgMCAuMDM0NDQtLjk0MDMuNjU0NDQtNC40MTIxLjY1NDQ0eiIgZmlsbD0iIzI1YjY3ZSIvPjxwYXRoIGQ9Im0xOC41MzIgOS4yMjA0NmMuMDU5OCAwIC4xMDgzLS4wNDYxNS4xMDgzLS4xMDMwNyAwLS4wNTY5My0uMDQ4NS0uMTAzMDgtLjEwODMtLjEwMzA4LS4wNTk3IDAtLjEwODIuMDQ2MTUtLjEwODIuMTAzMDggMCAuMDU2OTIuMDQ4NS4xMDMwNy4xMDgyLjEwMzA3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im05Ljg1MTE0IDkuMjIwNDZjLjA1OTc3IDAgLjEwODIyLS4wNDYxNS4xMDgyMi0uMTAzMDcgMC0uMDU2OTMtLjA0ODQ1LS4xMDMwOC0uMTA4MjItLjEwMzA4cy0uMTA4MjIuMDQ2MTUtLjEwODIyLjEwMzA4YzAgLjA1NjkyLjA0ODQ1LjEwMzA3LjEwODIyLjEwMzA3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im0xNy4yMjkzIDExLjc3MDhjLS4zNjE3LjI0MTItLjc5NTcuNDEzNC0xLjE1NzMuNDgyM3Y0LjI3MTFjMCAuOTMtLjc5NTcgMS42NTMzLTEuNzM1OSAxLjY1MzNoLS4xMDg1LS4xMDg1Yy0uOTc2NSAwLTEuNzM1OS0uNzU3OC0xLjczNTktMS42NTMzdi00LjI3MTFjLS4zMjU1LS4wNjg5LS43NTk1LS4yMDY3LTEuMTIxMi0uNDgyM2gtMS4xOTM0djQuOTI1NmMwIDIuMDMyMiAxLjczNTkgMy42ODU2IDMuODY5NiAzLjY4NTZoLjI4OTQuMjg5M2MyLjEzMzcgMCAzLjg2OTYtMS42NTM0IDMuODY5Ni0zLjY4NTZ2LTQuOTI1NnoiIGZpbGw9IiMyNWI2N2UiLz48L3N2Zz4=" className="amozon" style={{ marginLeft: "680px",marginTop: "270px"}}/></div></div></div>
       <div className="gYNVsu"> <div className="lll"><div className="vgp"><img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMjcgMjciIHdpZHRoPSIyNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSIjZWFlY2Y2IiBoZWlnaHQ9IjI2IiByeD0iNi40MDYiIHdpZHRoPSIyNiIgeD0iLjMzNCIgeT0iLjQ1MyIvPjxwYXRoIGQ9Im0xMC45MTU4IDExLjM0N2g0LjAzdjQuMDNoLTQuMDN6IiBmaWxsPSIjMDE0YThmIi8+PGcgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZWYxOTI1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0xNy4xMTM2IDYuNjk2NzhoLTMuNDA4OHYyLjQ4aDMuNDA4OHYzLjQxMDAyaDIuNDh2LTMuNDEwMDJoLjAwMTJ2LTIuNDhoLS4wMDEyeiIvPjxwYXRoIGQ9Im0xOS41OTYyIDIwLjAyMzF2LTUuODloLTIuNDh2My40MDloLTMuNDExdjIuNDhoMy40MTF2LjAwMXoiLz48cGF0aCBkPSJtNi41NzUzMyAyMC4wMzNoNS44ODk5N3YtMi40OGgtMy40MDg3OHYtMy40MTA0aC0yLjQ4bC0uMDAwMDEgMy40MTA0aC0uMDAxMTh6Ii8+PHBhdGggZD0ibTYuNTc0OTEgNi42OTc3OWgtLjAwMDJ2Mi40OGguMDAwMnYzLjQwODkxaDIuNDhsLjAwMDAxLTMuNDA4OTFoMy40MDk3OHYtMi40OGgtMy40MDk3OHYtLjAwMTEyaC0yLjQ4MDAxeiIvPjwvZz48L3N2Zz4=" className="amozon" style={{ marginLeft: "760px",marginTop: "270px"}}/></div></div></div>
        </div>
        
        
        </div>
        <div>
       <div className="bysyth" >
      <div className="gYNVsu"> <div className="lll"><div className="vgp"><img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMjcgMjciIHdpZHRoPSIyNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSIjZjQ3OTIwIiBoZWlnaHQ9IjI2IiByeD0iNi40MDYiIHdpZHRoPSIyNiIgeD0iLjc1OSIgeT0iLjQ1MyIvPjxjaXJjbGUgY3g9IjEzLjc0IiBjeT0iMTMuNDczIiBmaWxsPSIjNjcxNzczIiByPSIxMC45Ii8+PGcgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZjQ3OTIwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im04LjE4ODcyIDEzLjkwOWgyLjI5NTU4bC0xLjE0ODktMi43MzE2eiIvPjxwYXRoIGQ9Im0yMS4zMTUzIDEzLjc2OTFjMCAyLjUwNy0xLjQwODIgMy43MzY1LTMuNjMxOCAzLjczNjVzLTMuNTgxOC0xLjI0MDQtMy41ODE4LTMuNjcxMXYtMy44OTc4M2MuMDExNS0uMjMzNjguMTEyMy0uNDU0MDEuMjgxOC0uNjE1MzUuMTY5NC0uMTYxMzQuMzk0NC0uMjUxMzMuNjI4NC0uMjUxMzMuMjMzOSAwIC40NTg5LjA4OTk5LjYyODQuMjUxMzMuMTY5NC4xNjEzNC4yNzAzLjM4MTY3LjI4MTcuNjE1MzV2My44NDMzM2MwIDEuMzQ5NC42NzM2IDIuMDQ3IDEuNzg1NCAyLjA0N3MxLjc4NzYtLjY3MzYgMS43ODc2LTEuOTg2di0zLjkwNDMzYy4wMTE1LS4yMzM2OC4xMTI0LS40NTQwMS4yODE4LS42MTUzNXMuMzk0NC0uMjUxMzMuNjI4NC0uMjUxMzMuNDU4OS4wODk5OS42Mjg0LjI1MTMzYy4xNjk0LjE2MTM0LjI3MDMuMzgxNjcuMjgxNy42MTUzNXptLTguNzIgMy42Nzc3Yy0uMTkyMi0uMDAxMi0uMzc5My0uMDYyMS0uNTM1NS0uMTc0MS0uMTU2Mi0uMTEyMS0uMjczNy0uMjY5OS0uMzM2NS0uNDUxNmwtLjU1NTktMS4zMDhoLTMuNjUzNjNsLS41Nzk4OCAxLjM3MzRjLS4wNjYxNS4xNjgzLS4xODE3OC4zMTI2LS4zMzE2My40MTM4LS4xNDk4NS4xMDExLS4zMjY4Ni4xNTQ1LS41MDc2Ny4xNTMtLjExMTQxLjAwMDMtLjIyMTc3LS4wMjE2LS4zMjQ1OS0uMDY0NS0uMTAyODMtLjA0MjktLjE5NjA2LS4xMDU5LS4yNzQyMi0uMTg1My0uMDc4MTctLjA3OTQtLjEzOTcxLS4xNzM1LS4xODEtLjI3Ny0uMDQxMy0uMTAzNS0uMDYxNTItLjIxNDItLjA1OTQ5LS4zMjU2LjAwNzgzLS4xMzU0LjA0NDIzLS4yNjc3LjEwNjgyLS4zODhsMi44ODQxNC02LjUyMDM5Yy4wODI2OC0uMjE0OTUuMjI5MTEtLjM5OTQ4LjQxOTY1LS41Mjg4NC4xOTA1NC0uMTI5MzcuNDE2MDctLjE5NzM4LjY0NjM3LS4xOTQ5MmguMTA2ODJjLjIyOTUxLS4wMDM4MS40NTQ1My4wNjM3OS42NDM5MS4xOTM0NS4xODk0LjEyOTY2LjMzMzkuMzE0OTcuNDEzNC41MzAzMWwyLjg3OTggNi41MTM3OWMuMDU4NC4xMTM2LjA5MTEuMjM4Ny4wOTU5LjM2NjMgMCAuMjMxMy0uMDkxOS40NTMxLS4yNTU0LjYxNjYtLjE2MzYuMTYzNS0uMzg1My4yNTU0LS42MTY2LjI1NTR6bTEuMTQ0NS0xNC44NzQxN2MtMi4xNTU4IDAtNC4yNjMxNy42MzkyOC02LjA1NTY3IDEuODM2OTgtMS43OTI0OSAxLjE5NzcxLTMuMTg5NTcgMi45MDAwNi00LjAxNDU3IDQuODkxNzctLjgyNDk5IDEuOTkxNzItMS4wNDA4NSA0LjE4MzMyLS42MjAyNyA2LjI5NzcyczEuNDU4NyA0LjA1NjYgMi45ODMwOSA1LjU4MWMxLjUyNDQgMS41MjQ0IDMuNDY2NTkgMi41NjI1IDUuNTgxMDIgMi45ODMxIDIuMTE0NC40MjA2IDQuMzA2LjIwNDcgNi4yOTc3LS42MjAzczMuNjk0MS0yLjIyMjEgNC44OTE4LTQuMDE0NiAxLjgzNjktMy44OTk5IDEuODM2OS02LjA1NTdjMC0xLjQzMTktLjI4MjEtMi44NDk5LS44MzAzLTQuMTcyNzMtLjU0ODItMS4zMjI4Ny0xLjM1MTctMi41MjQ3Ny0yLjM2NDUtMy41MzcwMS0xLjAxMjktMS4wMTIyNS0yLjIxNTItMS44MTUtMy41Mzg0LTIuMzYyMzlzLTIuNzQxMy0uODI4Ny00LjE3MzMtLjgyNzg0eiIvPjwvZz48L3N2Zz4=" className="amozon" style={{ marginLeft: "320px",marginTop: "350px"}}/></div></div></div>
        <div className="gYNVsu"> <div className="lll"><div className="vgp"><img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMjcgMjciIHdpZHRoPSIyNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSIjMDBmZmEzIiBoZWlnaHQ9IjI2IiByeD0iNi40MDYiIHdpZHRoPSIyNiIgeD0iLjE4NSIgeT0iLjQ1MyIvPjxnIGZpbGw9IiMxNjFlMmUiPjxwYXRoIGQ9Im01Ljk0NTc3IDIwLjM3MjljLjU0Mjc4LS44MDAxIDQuMDc3OTMtNS42OTI1IDQuNzU4NTMtNi42MzA5LjA5Ny0uMTMzOS4zMTc5LS4yNTEuNTE5Mi0uMDczOC4wMDk4LjAwODguMTg4LjE3MjIuMTk3My4xODA2LjkwNzkuODA1IDEuNTY0OSAxLjM1MTcgMi40NzE4IDIuMTU3OC4wNDIzLjAzNzQuMDg1MS4wNzM4LjEyODkuMTEwMi4wOTI1LjA3NjguMjMxMy4wNTg2LjI5ODctLjA0MDMuMDI0Ni0uMDM2LjA0NjMtLjA3MjQuMDcwOS0uMTA2My43NDMtMS4wMjQ2IDEuNDgzNi0yLjA1MTEgMi4yMjQ3LTMuMDc3MS45MjUyLTEuMjgwNCAxLjg0OTgtMi41NjA4IDIuNzc1OS0zLjg0MDI4bC4wMDE1LS4wMDE5N2MuMDkxLS4xMjU0OS4yODE1LS4xMDU4LjM0NzkuMDMzOTUuMDAzLjAwNTkxLjAwNTQuMDExODEuMDA4NC4wMTc3Mi4yNzAxLjUzNjM4LjQzMzUgMS4xMDkxOC41NjE1IDEuNjkyNzguMjA5Ni45NTU3LjE2MTQgMS45MDk4LS4wMTM4IDIuODY2NS0uMjg0NCAxLjU1MTUtLjk2OCAyLjkwNzItMS45ODEyIDQuMTA0NS0uOTkzIDEuMTc0MS0yLjIwODUgMi4wNDEyLTMuNjQ4NCAyLjU3OTEtLjgzNzUuMzEyOS0xLjcwNjUuNDkwNi0yLjYwNzEuNDkwMS0xLjgyMDItLjAwMS0zLjY0MDQ4LjAwMTUtNS40NjA3NC4wMDEtLjA5Mzk5IDAtLjE4ODQ3LS4wMDQ1LS4yODA5OC0uMDE5Mi0uMTYxOS0uMDI1MS0uMjkxMzItLjA5MzUtLjM3Mzk5LS4yMTc1LS4wNDYyNi0uMDY4NC0uMDQ1NzctLjE1ODUuMDAwOTgtLjIyNjl6Ii8+PHBhdGggZD0ibTEzLjgwNDIgMTMuMTQ2Yy0uMDE5Mi4wMzQ0LS4wOTg0LjE1Ni0uMjU3OS4wMzg0LS4wODU2LS4wNjM1LS4wNTU2LS4wMzYtLjEyNDUtLjA5NDUtLjkxMzgtLjc4MjUtMS42OTUyLTEuNDU1Ni0yLjYwODEtMi4yNC0uMjU3OC0uMjMyOC0uNTA5OC0uMTI2LS42MzUzLjE1NzQtLjU5Mjk1IDEuMjIzNC0xLjA5NTg2IDIuMjQ0NS0xLjY4Nzg1IDMuNDY4My0uODA2MDUgMS42NjYyLTEuNjEyNTkgMy4zMzI1LTIuNDIwMTIgNC45OTgyLS4wNzM4MS4xNjgzLS4xNzU2Ny4xMjYtLjE2NDg1LjA0OTIuMTE3NjEtLjgwNy4yMzYyMS0xLjYxNDEuMzU1MjktMi40MjA2LjE3ODYzLTEuMjEwNS4zNTcyNi0yLjQyMDYuNTM1ODktMy42MzEyLjE3ODYzLTEuMjEwNS4zNTYyOC0yLjQyMDYuNTM0NDItMy42MzExMS4xNjE0LTEuMDk2MzguMzIyMzItMi4xOTMyNi40ODQ3MS0zLjI4OTY0LjAxOTY4LS4xMzQzNC4wMzc4OS0uMjY5NjcuMDcwMzctLjQwMTU1LjA2Mjk4LS4yNTQ0MS4yMTAxMi0uNDMwMDkuNDgzNzItLjQ2OTQ2LjEwMjg1LS4wMTQ3Ni4yMDcxOC0uMDI4MDUuMzExMDEtLjAyODA1IDEuNzk5NjEtLjAwMTQ3IDMuNTk4NzEtLjAxMDMzIDUuMzk4MzEuMDAyNDYgMS4wNDk2LjAwNzM4IDIuMDUzNS4yMzUyMiAyLjk5MDkuNzIxOS4wMDY0LjAwMzQ1LjAxMjguMDA2ODkuMDE5Mi4wMTAzNC0uMDU4Ni4xMjg5My0yLjE2NjcgNC40NTE1MS0zLjI4NTIgNi43NTk5MXoiLz48L2c+PC9zdmc+" className="amozon" style={{ marginLeft: "400px",marginTop: "350px"}}/></div></div></div>
        <div className="gYNVsu"> <div className="lll"><div className="vgp"><img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMjcgMjciIHdpZHRoPSIyNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGZpbHRlciBpZD0iYSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGhlaWdodD0iMTQuODE2IiB3aWR0aD0iMTkuMTU2IiB4PSIzLjg5NCIgeT0iNS44MiI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPjxmZU9mZnNldC8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iLjE3OCIvPjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjIxIDAiLz48ZmVCbGVuZCBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgbW9kZT0ibm9ybWFsIiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgbW9kZT0ibm9ybWFsIiByZXN1bHQ9InNoYXBlIi8+PC9maWx0ZXI+PHJlY3QgZmlsbD0iIzAwYzZhOCIgaGVpZ2h0PSIyNiIgcng9IjYuNDA2IiB3aWR0aD0iMjYiIHg9Ii42MSIgeT0iLjQ1MyIvPjxnIGZpbHRlcj0idXJsKCNhKSI+PHBhdGggZD0ibTkuMTMxNTIgNi4xNzU3Mi00Ljg4MjUgMTQuMTA0OThoNC4zNGwzLjc5NzQ4LTEwLjMwNzQ4IDIuNzEyNSA1Ljk2NzQ4LTEuNjI3NSA0LjM0aDQuMzRsNC44ODI1LTE0LjEwNDk4aC00LjM0bC0xLjYyNzUgNC44ODI0OC0yLjE3LTQuODgyNDh6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==" className="amozon" style={{ marginLeft: "480px",marginTop: "350px"}}/></div></div></div>
        <div className="gYNVsu"> <div className="lll"><div className="vgp"><img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMjcgMjciIHdpZHRoPSIyNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSIjMDcwNzA3IiBoZWlnaHQ9IjI2IiByeD0iNi40MDYiIHdpZHRoPSIyNiIgeD0iLjAzNSIgeT0iLjQ1MyIvPjxnIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Im04LjY5Mjg1IDE3LjY0NjFoLS4wNzE5MmMtMi4xNTQ2MiAwLTMuOTA1ODQtMS43NTEyLTMuOTA1ODQtMy45MDU4di00Ljc1NjQ3aDIuMTI2NDh2NC43NTY0N2MwIC45ODE5Ljc5NzQzIDEuNzc5MyAxLjc3OTM2IDEuNzc5M2guMDcxOTJjLjk4MTk0IDAgMS43NzkzNS0uNzk3NCAxLjc3OTM1LTEuNzc5M3YtNC43NTY0N2gyLjEyNjV2NC43NTY0N2MuMDAzMSAyLjE1MTUtMS43NTEyIDMuOTA1OC0zLjkwNTg1IDMuOTA1OHoiLz48cGF0aCBkPSJtMjAuMjk3MiAxNC43Nzc5Yy0uNDA5Ni40MDM0LS45Njk0LjY1MDUtMS41ODg2LjY1MDUtMS4yNDc3IDAtMi4yNjQtMS4wMTY0LTIuMjY0LTIuMjY0MXMxLjAxNjMtMi4yNjQxIDIuMjY0LTIuMjY0MWMuNjE2MSAwIDEuMTc1OC4yNDcxIDEuNTgyNC42NDc0bDEuNTA3My0xLjQ5OGMtLjc5NDMtLjc4ODAyLTEuODg4OC0xLjI3NTg2LTMuMDkyOC0xLjI3NTg2LTIuNDIwNCAwLTQuMzkwNiAxLjk3MDE2LTQuMzkwNiA0LjM5MDU2czEuOTcwMiA0LjM5MDYgNC4zOTA2IDQuMzkwNmMxLjIxMDIgMCAyLjMwNzktLjQ5MSAzLjEwMjItMS4yODUzeiIvPjwvZz48L3N2Zz4=" className="amozon" style={{ marginLeft: "560px",marginTop: "350px"}}/></div></div></div>
        <div className="gYNVsu"> <div className="lll"><div className="vgp"><img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMjcgMjciIHdpZHRoPSIyNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSIjMTYxOTI4IiBoZWlnaHQ9IjI2IiByeD0iNi40MDYiIHdpZHRoPSIyNiIgeD0iLjQ2IiB5PSIuNDUzIi8+PGcgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im03LjMyOTAxIDcuMjE0OTdoMTAuNjE4MjljLjM0NjQgMCAuNjI5My4yODM2NS42MjkzLjYyOTN2NS4wNTYxM2MtLjM0NzItLjA1NTEtLjY2OTYtLjEyMTctLjk2NzItLjE5Nzd2LTQuMzcwOTZjMC0uMDgxMzctLjA2NzQtLjE0ODgtLjE0ODgtLjE0ODhoLTkuNjQ0ODljLS4wODEzOCAwLS4xNDg4LjA2NzQzLS4xNDg4LjE0ODh2OS42NDQwNmMwIC4wODE0LjA2NzQyLjE0ODguMTQ4OC4xNDg4aDQuNDgyNTljLjMwMy4zMjc5LjYzNC42NTE4Ljk5MzYuOTY3MmgtNS45NjI4OWMtLjM0NjQzIDAtLjYyOTMtLjI4MzYtLjYyOTMtLjYyOTN2LTEwLjYxODIzYy0uMDAwNzgtLjM0NjQzLjI4Mjg3LS42MjkzLjYyOTMtLjYyOTN6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0ibTE1Ljg5MSAxNy44NjI1LS4wNDczLS4wMjMyYy00Ljg0NzYtMi4zNDYtNS44NDk2Ni01LjcxNzItNi4wNTY1OC02Ljk0OTUtLjAyOTQ1IDEuMjE2LjgwMzY4IDUuNDcgNC45NjkyOCA4LjY0MjguNDUyNi4wNzQ0IDUuMTk3OS0uNjIzOCA1LjE5NzktLjYyMzhzLS44ODczLS4xNzM2LTIuMjIxMS0xLjI0OTNjLS44OTUxLjA3NzUtMS42MzE0LjE5NjgtMS43ODk1LjIwMDd6IiBmaWxsPSIjZjQ4MDMxIi8+PHBhdGggZD0ibTE5LjQ3MzQgMTQuNTA2M2MtLjE4Ni4wMDM4LS4zNzIgMC0uNTU4LS4wMTMyLS4wNzk4LS4wMDYyLS4xNjA0LS4wMTYzLS4yNDAyLS4wMjU2IDAgMC0uMDAxNiAwLS4wMDI0LS4wMDE1LS4yOTgzLS4wMzgtLjU5MzYtLjEwNjItLjg3NjUtLjIwOTMtLjAxNjMtLjAwNTQtLjAzMTgtLjAxMDgtLjA0OC0uMDE3LS4wNDAzLS4wMTU1LS4wNzkxLS4wMzE4LS4xMTg2LS4wNDgxLS4wMjE3LS4wMDkzLS4wNDQyLS4wMTc4LS4wNjUxLS4wMjc5LS4wMzY0LS4wMTU1LS4wNzEzLS4wMzI1LS4xMDc3LS4wNDk2LS4wMjQ4LS4wMTI0LS4wNDg5LS4wMjQtLjA3MzctLjAzNzItLjAzMjUtLjAxNjMtLjA2NTEtLjAzNDEtLjA5ODQtLjA1MjctLjAyNjMtLjAxNTUtLjA1MjctLjAyOTQtLjA3OS0uMDQ1Ny0uMDMxLS4wMTg2LS4wNjItLjAzOC0uMDkxNS0uMDU2Ni0uMDI4Ny0uMDE3OC0uMDU1LS4wMzQ5LS4wODE0LS4wNTQyLS4wMjg2LS4wMjAyLS4wNTczLS4wNDAzLS4wODYtLjA1OTctLjAyNzEtLjAyMDktLjA1NS0uMDQyNi0uMDgyOS0uMDYyOC0uMDI2NC0uMDIxNy0uMDUzNS0uMDQyNi0uMDc5OC0uMDY1MS0uMDI3OS0uMDIzMi0uMDU1OC0uMDQ4LS4wODM3LS4wNzEzLS4wMjQ4LS4wMjI1LS4wNDk2LS4wNDQ5LS4wNzQ0LS4wNjgyLS4wMjc5LS4wMjcxLS4wNTY2LS4wNTUtLjA4MzctLjA4MzctLjAyMzMtLjAyNC0uMDQ1OC0uMDQ2NS0uMDY5LS4wNzA1LS4wMjg3LS4wMzEtLjA1NjYtLjA2MzYtLjA4NDUtLjA5NjktLjAyMDktLjAyMzItLjA0MTEtLjA0NTctLjA2MTItLjA2OTctLjAzMTgtLjAzODgtLjA2MTItLjA3OTEtLjA5MTUtLjEyMDItLjAxNjItLjAyMDktLjAzMjUtLjA0MDMtLjA0OC0uMDYyNy0uMDQ1Ny0uMDYyOC0uMDg5OS0uMTI4Ny0uMTMyNS0uMTk3NyAwIDAtMi4zMTExLjg3NTgtNC4xNzI2LjU4NTkuMDYyLjA0NjUuMTI0LjA5MjMuMTg5MS4xMzggMS4yMjIxLjg1OTUgMy4xNTczIDEuNDQ5MiA2LjIxNTUgMS4xMDI4LjQ1NjQtLjA0MDMuOTc0OS0uMDk3NiAxLjUxMDQtLjE3NTEtLjEwNzcuMDA2OS0uMjE2Mi4wMTMxLS4zMjQ3LjAxNTV6IiBmaWxsPSIjZGM2NzI2Ii8+PGcgZmlsbD0iI2Y0ODAzMSI+PHBhdGggZD0ibTE3LjUyMiAxNC45ODczYy0uNzIzOC4wNDgtMS40MDc0LjA0MTgtMi4wNDEzLS4wMTg2LTEuNDA5Ny0uMTM0MS0yLjU5NzgtLjUzNTYtMy41MzI1LTEuMTkyLS4wNjc0LS4wNDgtLjEzMzMtLjA5NTMtLjE5NTMtLjE0NDEtLjMyNy0uMjUxOS0uNTk3NS0uNTIyNC0uODI1My0uNzk2N2wuMDAwNy0uMDAwOHMtLjYwMjktLjcxODQtLjk0ODU2LTEuOTQ1M2MuMDY4MTYuMjUwNC4xNjU4Ni41ODgzLjI5NTI2Ljk1MS0uMDAxNS0uMDAzOS0uMDAzOS0uMDA3LS4wMDYyLS4wMTA5LjA3MzYuMjExNi4xNjU5LjQ0MzMuMjc1OS42ODc0LjAxMTYuMDI0OC4wMjMzLjA0ODkuMDM0OS4wNzYuMDAzOS4wMDU0LjAwNy4wMTMyLjAxMDEuMDE5NC4wNDU3LjA5ODQuMDkzNy4xOTYuMTQ0OS4yOTA2Ljc2MSAxLjQ1OTMgMi4yNTc2IDMuMjc5IDUuMjAxOCA0LjcwNDIuNDU4LS4wMTU1IDUuOTA1NS0uNjg1MSA1LjkwNTUtLjY4NTEgMC0uMDAwNy0yLjEzOS0uNDY4OC00LjMxOTktMS45MzUxeiIvPjxwYXRoIGQ9Im0yMS42MDYyIDEzLjUwNjhjLS44MDE0LjAyNC0xLjUxODMuMDAxNi0yLjE2LS4wNTY2LTIuMTI0Mi0uMTkzNy0zLjQzMzItLjc4NDMtNC4yMzYxLTEuNDEyOC0xLjE1NC0uOTA0NC0xLjI2NTYtMS44ODk0LTEuMjY1Ni0xLjg4OTRsLTMuOTMxNi0uMTQyNi4wMDQ3LjAyMDlzLS4wMDM5IDAtLjAwNDcgMGMwIDAgLjAxNTUuMjI5NC4xMDYyLjU4NTEuMDI3MS4xMDU0LjA2MDUuMjIwMS4xMDIzLjM0NDkuMTI0OC4zNzIuMzI1NS44MjA3LjY0MDkgMS4yNzU2LjE0MzQuMjAzMS4zMTE2LjQwOTIuNTA2MS42MDkyLjAwMDguMDAxNS4wMDE2LjAwMjMuMDAzMS4wMDM5LjAwNTQuMDA2OS4wMzEuMDM2NC4wNzUyLjA3OSAwIDAgLjAwMTUuMDAxNi4wMDMxLjAwMzEuMDE0Ny4wMTQ3LjAzMTguMDI5NS4wNDk2LjA0NjUuMDg4My4wNzgzLjIxNDcuMTcxMy4zNjExLjIyNzkuMDIzMy4wMS4wNDU4LjAyMDkuMDcwNi4wMjcxLjA4NzUuMDEzOS4xNzgyLjAyNDguMjcwNC4wMzQxLjk1MDIuMDg5OSAxLjk4ODctLjA5NTMgMi43NDc0LS4yODM3LjY0NjQtLjE2MTkgMS4wODg5LS4zMjcgMS4wOTk3LS4zMzA5bC4wODIyLS4wMzEuMDQ1Ny4wNzM2Yy4wNDE5LjA2NjcuMDg1My4xMzAyLjEyOTQuMTkwNy4wMDkzLjAxMzkuMDE4Ni4wMjU2LjAyODcuMDM4bC4wMTc4LjAyMzJjLjAzMDMuMDQwMy4wNTg5LjA3OTEuMDg5Mi4xMTU1LjAxMzEuMDE2My4wMjYzLjAzMTguMDQwMy4wNDczbC4wMjcxLjAzMTdjLjAyNC4wMjg3LjA0OC4wNTU4LjA3MzYuMDgzNy4wMTYzLjAxNjMuMDMxOC4wMzM0LjA0ODguMDUwNGwuMDE3MS4wMTcxYy4wMjcxLjAyNzkuMDU0Mi4wNTUuMDgxNC4wODEzLjAyMjQuMDIxLjA0NTcuMDQxOS4wNjg5LjA2MzYuMDI5NS4wMjU2LjA1NjYuMDQ4LjA4MzcuMDcxMy4wMjU2LjAyMTcuMDUwNC4wNDE4LjA3NjguMDYxMi4wMjcxLjAyMjUuMDUzNC4wNDE5LjA4MDYuMDYxMi4wMjcxLjAyMS4wNTUuMDQwMy4wODI5LjA1OTcuMDI2My4wMTc4LjA1MTkuMDM0OS4wNzgzLjA1MTIuMDMxLjAxOTMuMDU5Ni4wMzcyLjA4OTkuMDU1LjAyNTUuMDE1NS4wNTAzLjAzMS4wNzUxLjA0MzQuMDMyNi4wMTcuMDY1MS4wMzQ5LjA5NjkuMDUyNy4wMjA5LjAxMDEuMDQyNi4wMjA5LjA2NTEuMDMxOC4wNDExLjAxOTMuMDc1Mi4wMzcyLjExMDEuMDUxOS4wMTU1LjAwNjIuMDYyNy4wMjYzLjA2MjcuMDI2My4wNDAzLjAxNjMuMDc4My4wMzE4LjExNTUuMDQ3M2wuMDQ2NS4wMTYzYy4yNjU4LjA5NjEuNTUyNi4xNjU4Ljg1NDEuMjAzbC4wMTU1LjAwMTZjLjA1NDIuMDA3Ny4xMDY5LjAxMzIuMTU4MS4wMTc4bC4wNjM1LjAwNjJjLjE3NTkuMDEzMi4zNjA0LjAxODYuNTQ3Mi4wMTMyLjA1MTktLjAwMTYuMTA2MS0uMDAzMS4xNjA0LS4wMDYyLjA1MDQtLjAwMjMuMTAxNS0uMDA1NC4xNTgxLS4wMDkzdi4wMDE1Yy4wNDU3LS4wMDYyLjExMzEtLjAxMzEuMTk1My0uMDIzMi4wNjktLjAwODUuMTQ2NS0uMDE3OC4yMzA5LS4wMjk1LjEyMzMtLjAxNzguMjU5Ny0uMDM4Ny40MDA3LS4wNjUxLjAwMjMtLjAwMDcuMDA0Ny0uMDAxNS4wMDQ3LS4wMDE1LjE3NTEtLjAzMjYuMzU3Mi0uMDc2LjUzMzktLjEyNzEuMDMxLS4wMDkzLjA2Mi0uMDE3OC4wOTMtLjAyNzkuMzk1My0uMTM4LjgyMTUtLjMxNzggMS4yMzMxLS41NTY1LS4zMTI0LjAyNDEtLjYxMzEuMDM4LS45MDUyLjA0NzN6Ii8+PC9nPjwvZz48L3N2Zz4=" className="amozon" style={{ marginLeft: "640px",marginTop: "350px"}}/></div></div></div>
        </div>
        
        
        </div>
      
      </div>
      <div style={{marginTop: "150px"}}>
      <p className="kndQmZ">Claim & more</p>
      </div>

      <div className="dFBTzM ">
      <p className="kFQbGJ" style={{marginTop: "180px"}}>Here’s why you’ll love ACKO</p>

      <div className="gQKYPt ">

      <div className="bnNcFn">
      <div className="bEZEUb">
      <div className="llrdAW"><div className="imstyle"><div><img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMSAxMjAiIHdpZHRoPSIxMjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjAuNSIgY3k9IjYwIiBmaWxsPSIjZjZmN2ZiIiByPSI2MCIvPjxwYXRoIGQ9Im0yNy4zNDg2IDQ2LjEzODUgNDUuNDAzNy0xNC40MTU0YzQuMTQ3NC0xLjMxMDUgOC4yOTQ4IDEuNzQ3MyA4LjI5NDggNi4xMTU2djguMjk5OHoiIGZpbGw9IiMzNDM3NTgiLz48cGF0aCBkPSJtOTQuMzYyNSAxMTQuNzE5aC02NS4yNjc3Yy0yLjgzNzcgMC01LjAyMDYtMi4xODQtNS4wMjA2LTUuMDIzdi01OC45NzIzYzAtMi44Mzk0IDIuMTgyOS01LjAyMzUgNS4wMjA2LTUuMDIzNWg2NS4yNjc3YzQuMTQ3NCAwIDcuNDIxNSAzLjI3NjIgNy40MjE1IDcuNDI2MXY1NC4zODU3YzAgMy45MzEtMy4yNzQxIDcuMjA3LTcuNDIxNSA3LjIwN3oiIGZpbGw9IiNhODkyZjciLz48cGF0aCBkPSJtMTAxLjc4NCA5NS45MzU1aC03Ny43MDk4djguMjk5NWg3Ny43MDk4eiIgZmlsbD0iIzdjNDdlMSIvPjxwYXRoIGQ9Im05OS4xNjUyIDM2LjA5MDNjNS41NDU4IDAgMTAuMDQwOC00LjQ5ODIgMTAuMDQwOC0xMC4wNDcxcy00LjQ5NS0xMC4wNDcxLTEwLjA0MDgtMTAuMDQ3MWMtNS41NDU2IDAtMTAuMDQxMiA0LjQ5ODItMTAuMDQxMiAxMC4wNDcxczQuNDk1NiAxMC4wNDcxIDEwLjA0MTIgMTAuMDQ3MXoiIGZpbGw9IiNmZmU2NjIiLz48cGF0aCBkPSJtMTAyLjQzOSAyMy44NTk5Yy4yMTkgMCAuMjE5IDAgLjIxOS0uMjE4NGwuMjE4LS42NTUzYzAtLjIxODQgMC0uMjE4NC0uMjE4LS4yMTg0bC01LjIzOTQtMS43NDczYy0uMjE4MyAwLS4yMTgyIDAtLjIxODIuMjE4NGwtLjIxODMuNDM2OXYuMjE4NGwuNjU0OC4yMTg0Yy44NzMyLjQzNjggMS45NjQ2IDEuMDkyMSAxLjc0NjMgMi42MjFsLTIuODM3Ny0xLjA5MjFjLS4yMTgzIDAtLjIxODMgMC0uMjE4My4yMTg0bC0uMjE4My42NTUzYzAgLjIxODQgMCAuMjE4NC4yMTgzLjIxODRsMi44Mzc3Ljg3MzZjLS44NzMxLjg3MzctMi4xODI4Ljg3MzctMi44Mzc3LjY1NTMtLjIxODMgMC0uNDM2Ni4yMTg0LS40MzY2LjQzNjhsMi40MDEyIDUuMjQyYzAgLjIxODQuMjE4My4yMTg0LjQzNjYuMjE4NGwuNjU0OC0uNDM2OGMuMjE4MyAwIC4yMTgzLS4yMTg1LjIxODMtLjQzNjlsLTIuMTgyOS0zLjI3NjJzMS45NjQ2IDAgMy4wNTY0LTEuNTI4OWwuODczLjIxODRjLjIxOCAwIC4yMTggMCAuMjE4LS4yMTg0bC4yMTgtLjY1NTNjMC0uMjE4NCAwLS4yMTg0LS4yMTgtLjIxODRsLS44NzMtLjIxODRjLjIxOC0uODczNiAwLTEuNTI4OS0uMjE4LTEuOTY1N3oiIGZpbGw9IiNmZmE4MDAiLz48cGF0aCBkPSJtMTA0LjE4NiA4Ni4zMjYxaC01LjY3NTVjLTEuMzA5NyAwLTIuNDAxMS0xLjA5MjEtMi40MDExLTIuNDAyNnYtMTMuMTA0OWMwLTEuMzEwNSAxLjA5MTQtMi40MDI2IDIuNDAxMS0yLjQwMjZoNS42NzU1YzIuNDAxIDAgNC4zNjYgMS45NjU4IDQuMzY2IDQuMzY4M3Y4Ljk1NTFjMCAyLjYyMDktMS45NjUgNC41ODY3LTQuMzY2IDQuNTg2N3oiIGZpbGw9IiM3YzQ3ZTEiLz48cGF0aCBkPSJtMjUuODIxMyAxMTQuNzJjMTMuOTg0NSAwIDI1LjMyMTItMTEuMzQzIDI1LjMyMTItMjUuMzM2IDAtMTMuOTkyOC0xMS4zMzY3LTI1LjMzNjEtMjUuMzIxMi0yNS4zMzYxLTEzLjk4NDYgMC0yNS4zMjEzIDExLjM0MzMtMjUuMzIxMyAyNS4zMzYxIDAgMTMuOTkzIDExLjMzNjcgMjUuMzM2IDI1LjMyMTMgMjUuMzM2eiIgZmlsbD0iI2ZmZGExMiIvPjxwYXRoIGQ9Im0yNS42MDI1IDExMy44NDZ2LTMuNzEzYzExLjM1MSAwIDIwLjczNzMtOS4zOTIgMjAuNzM3My0yMC43NDkyaDMuNzEwOWMwIDEzLjMyMzItMTAuOTE0NCAyNC40NjIyLTI0LjQ0ODIgMjQuNDYyMnoiIGZpbGw9IiNmZmU0NmUiLz48cGF0aCBkPSJtMjUuODIwNiAxMDkuMDQxYzEwLjg1MDEgMCAxOS42NDU4LTguODAxIDE5LjY0NTgtMTkuNjU3MSAwLTEwLjg1NjQtOC43OTU3LTE5LjY1NzMtMTkuNjQ1OC0xOS42NTczcy0xOS42NDU4IDguODAwOS0xOS42NDU4IDE5LjY1NzNjMCAxMC44NTYxIDguNzk1NyAxOS42NTcxIDE5LjY0NTggMTkuNjU3MXoiIGZpbGw9IiNmYjVlMDAiLz48cGF0aCBkPSJtMjUuODIwNiAxMDkuMDQyYzEwLjYwODkgMCAxOS4yMDkyLTguNjA2IDE5LjIwOTItMTkuMjIwOSAwLTEwLjYxNTItOC42MDAzLTE5LjIyMDUtMTkuMjA5Mi0xOS4yMjA1LTEwLjYwOSAwLTE5LjIwOTI3IDguNjA1My0xOS4yMDkyNyAxOS4yMjA1IDAgMTAuNjE0OSA4LjYwMDI3IDE5LjIyMDkgMTkuMjA5MjcgMTkuMjIwOXoiIGZpbGw9IiNmMmFhMDAiLz48ZyBmaWxsPSIjZmZlNDZlIj48cGF0aCBkPSJtMzEuMDYwNCA4Mi42MTQyYy4yMTgzIDAgLjQzNjYtLjIxODUuNDM2Ni0uNDM2OXYtMS43NDczYzAtLjIxODQtLjIxODMtLjQzNjgtLjQzNjYtLjQzNjhoLTExLjU2OTFjLS4yMTgzIDAtLjQzNjYuMjE4NC0uNDM2Ni40MzY4djEuNzQ3M2MwIC4yMTg0IDAgLjIxODQuMjE4My40MzY5bC4yMTgzLjIxODRoMS4zMDk3YzEuOTY0NS4yMTg0IDQuNTg0Ljg3MzYgNS4wMjA2IDMuOTMxNGgtNi4zMzAzYy0uMjE4MyAwLS40MzY2LjIxODUtLjQzNjYuNDM2OXYxLjc0NzNjMCAuMjE4NC4yMTgzLjQzNjguNDM2Ni40MzY4aDUuODkzN2MtMS4wOTE1IDEuOTY1OC0zLjcxMDkgMy4wNTc4LTUuMjM4OSAzLjQ5NDctLjY1NDguMjE4NC0uNjU0OS44NzM2LS40MzY2IDEuMzEwNWw4LjI5NDkgOC45NTQ4Yy4yMTgzLjIxOS42NTQ5LjIxOS44NzMyIDBsMS4zMDk3LTEuMzFjLjIxODMtLjIxOS4yMTgzLS42NTYgMC0uODc0bC02LjExMi02LjExNTZzMy45MjkxLTEuMzEwNSA1LjAyMDUtNS4yNDJoMS45NjQ2Yy4yMTgzIDAgLjQzNjYtLjIxODQuNDM2Ni0uNDM2OHYtMS43NDczYzAtLjIxODQtLjIxODMtLjQzNjgtLjQzNjYtLjQzNjhoLTEuNzQ2M2MtLjIxODMtMS43NDc0LS44NzMxLTMuMDU3OS0xLjUyOC0zLjkzMTVoMy4yNzQzeiIvPjxwYXRoIGQ9Im01LjA4NDkxIDg5LjM4NDRoLTMuNzEwODljMC0xMy41NDE4IDEwLjkxNDM4LTI0LjQ2MjUgMjQuNDQ4MDgtMjQuNDYyNXYzLjcxM2MtMTEuMzUwOSAwLTIwLjczNzE5IDkuMzkxOS0yMC43MzcxOSAyMC43NDk1eiIvPjwvZz48L3N2Zz4="/></div></div></div>
      <p className="hNEJVw">Incredibly low premiums</p>
      <p className="jUPFYr">Insuring things that matter to you shouldn’t come at a cost. That’s why when you buy from us, you get insurance that fits your pocket.</p>
      
      
      
      </div>
      
      </div><div className="bnNcFn">
      <div className="bEZEUb">
      <div className="llrdAW"><div className="imstyle"><div><img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMSAxMjAiIHdpZHRoPSIxMjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjAuNSIgY3k9IjYwIiBmaWxsPSIjZjZmN2ZiIiByPSI2MCIvPjxwYXRoIGQ9Im01Ny44MjggMTA4LjgyNGgtMzUuMzYyNWMtNS42NzU0IDAtMTAuMjU5NC00LjU4Ni0xMC4yNTk0LTEwLjI2NTF2LTUzLjI5MzRjMC01LjY3ODggNC41ODQtMTAuMjY1NSAxMC4yNTk0LTEwLjI2NTVoMzUuMzYyNWM1LjY3NTQgMCAxMC4yNTk0IDQuNTg2NyAxMC4yNTk0IDEwLjI2NTV2NTMuNTExOGMtLjIxODIgNS40NjA3LTQuODAyMyAxMC4wNDY3LTEwLjI1OTQgMTAuMDQ2N3oiIGZpbGw9IiM3MGQ0ZjkiLz48cGF0aCBkPSJtNTMuNDYyNCAzNWgtOC41MTMydjczLjgyNGg4LjUxMzJ6IiBmaWxsPSIjMTZjMmY4Ii8+PHBhdGggZD0ibTUyLjM3MDggNjIuNzM5N2gtMjQuNjY2M2MtMS41MjgxIDAtMy4wNTYxLTEuMzEwNS0zLjA1NjEtMy4wNTc5IDAtMS41Mjg5IDEuMzA5OC0zLjA1NzggMy4wNTYxLTMuMDU3OGgyNC44ODQ2YzEuNTI4IDAgMy4wNTYgMS4zMTA1IDMuMDU2IDMuMDU3OC0uMjE4MiAxLjc0NzQtMS41MjggMy4wNTc5LTMuMjc0MyAzLjA1Nzl6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0ibTUyLjM3MDggODMuMjcxOWgtMjQuNjY2M2MtMS41MjgxIDAtMy4wNTYxLTEuMzEwNS0zLjA1NjEtMy4wNTc4IDAtMS41Mjg5IDEuMzA5OC0zLjA1NzkgMy4wNTYxLTMuMDU3OWgyNC44ODQ2YzEuNTI4IDAgMy4wNTYgMS4zMTA1IDMuMDU2IDMuMDU3OS0uMjE4MiAxLjc0NzMtMS41MjggMy4wNTc4LTMuMjc0MyAzLjA1Nzh6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0ibTYyLjQxMjYgMTE0LjcyMmMtNS4wMjA1IDAtOC45NDk3LTMuOTMyLTguOTQ5Ny04Ljk1NXYtNzEuNDIyM2MwLTUuMDIzNiAzLjkyOTItOC45NTUxIDguOTQ5Ny04Ljk1NTFoMzAuMzQxOWM1LjAyMDYgMCA4Ljk0OTUgMy45MzE1IDguOTQ5NSA4Ljk1NTF2NzEuNDIyM2MwIDUuMDIzLTMuOTI4OSA4Ljk1NS04Ljk0OTUgOC45NTV6IiBmaWxsPSIjZmZkNGRlIi8+PHBhdGggZD0ibTkzLjQwOTYgMjIuNzY5NWgtMzEuODY5OWMtNS42NzU0IDAtMTAuMjU5NCA0LjU4NjgtMTAuMjU5NCAxMC4yNjU2djc0LjA0MjljMCA1LjY3OSA0LjU4NCAxMC4yNjUgMTAuMjU5NCAxMC4yNjVoMzEuODY5OWM1LjY3NTQgMCAxMC4yNTk0LTQuNTg2IDEwLjI1OTQtMTAuMjY1di03NC4wNDI5Yy4yMTgtNS42Nzg4LTQuMzY1Ny0xMC4yNjU2LTEwLjI1OTQtMTAuMjY1NnptNy4yMDM0IDgyLjk5NzVjMCA0LjM2OS0zLjQ5MjUgOC4wODItOC4wNzY2IDguMDgyaC0zMC4xMjM1Yy00LjM2NTcgMC04LjA3NjYtMy40OTUtOC4wNzY2LTguMDgydi03MS40MjE1YzAtNC4zNjgzIDMuNDkyNi04LjA4MTMgOC4wNzY2LTguMDgxM2g1Ljg5MzdjLjQzNjYgMCAuNjU0OS4yMTg0Ljg3MzIuNDM2OGwuNjU0OCAxLjMxMDVjLjQzNjYuNjU1MiAxLjA5MTUgMS4zMTA1IDEuOTY0NiAxLjMxMDVoMTEuNzg3NWMuODczMSAwIDEuNTI4LS40MzY4IDEuOTY0Ni0xLjMxMDVsLjY1NDgtMS4zMTA1Yy4yMTgzLS4yMTg0LjQzNjYtLjQzNjguODczMi0uNDM2OGg1Ljg5MzdjNC4zNjU4IDAgOC4wNzcgMy40OTQ2IDguMDc3IDguMDgxM3Y3MS40MjE1eiIgZmlsbD0iIzVlMjdjOSIvPjxwYXRoIGQ9Im03NC4xOTkxIDU0LjAwMzktNy40MjE4IDE3LjI1NDhoNi45ODUybC02Ljk4NTIgMjAuNTMxMSAyMC43MzczLTI1LjMzNjJoLTYuNzY2OWw3LjY0LTEyLjQ0OTd6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"/></div></div></div>
      <p className="hNEJVw">Superquick and easy</p>
      <p className="jUPFYr">We’re easy, effortless and 100% digital. Forget paperwork, just access all our services with just a few clicks.</p>
      
      
      
      </div>
      
      </div>
      <div className="bnNcFn">
      <div className="bEZEUb">
      <div className="llrdAW"><div className="imstyle"><div><img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMSAxMjAiIHdpZHRoPSIxMjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjAuNSIgY3k9IjYwIiBmaWxsPSIjZjZmN2ZiIiByPSI2MCIvPjxwYXRoIGQ9Im04OS40MDczIDExNi44NmM5LjU0NyAwIDE3LjI4NjctNy43NDMgMTcuMjg2Ny0xNy4yOTYgMC05LjU1MjUtNy43Mzk3LTE3LjI5NjQtMTcuMjg2Ny0xNy4yOTY0LTkuNTQ2OSAwLTE3LjI4NjIgNy43NDM5LTE3LjI4NjIgMTcuMjk2NCAwIDkuNTUzIDcuNzM5MyAxNy4yOTYgMTcuMjg2MiAxNy4yOTZ6IiBmaWxsPSIjZmZkYTEyIi8+PHBhdGggZD0ibTg5LjQwNzIgMTE2LjE0OXYtMi42MDdjNy44MTQ0IDAgMTQuMjA3OC02LjM5NyAxNC4yMDc4LTE0LjIxNThoMi42MDVjLS4yMzcgOS4yNDA4LTcuNTc3NyAxNi44MjI4LTE2LjgxMjggMTYuODIyOHoiIGZpbGw9IiNmZmU0NmUiLz48cGF0aCBkPSJtODkuNDA2NyAxMTMuMDY5YzcuNDU0NCAwIDEzLjQ5NzMtNi4wNDYgMTMuNDk3My0xMy41MDUgMC03LjQ1ODgtNi4wNDI5LTEzLjUwNTQtMTMuNDk3My0xMy41MDU0LTcuNDU0NSAwLTEzLjQ5NzUgNi4wNDY2LTEzLjQ5NzUgMTMuNTA1NCAwIDcuNDU5IDYuMDQzIDEzLjUwNSAxMy40OTc1IDEzLjUwNXoiIGZpbGw9IiNmYjVlMDAiLz48cGF0aCBkPSJtODkuNDA2NyAxMTIuODM0YzcuMTkyOSAwIDEzLjAyNDMtNS44MzUgMTMuMDI0My0xMy4wMzE5IDAtNy4xOTcyLTUuODMxNC0xMy4wMzE2LTEzLjAyNDMtMTMuMDMxNnMtMTMuMDIzOSA1LjgzNDQtMTMuMDIzOSAxMy4wMzE2YzAgNy4xOTY5IDUuODMxIDEzLjAzMTkgMTMuMDIzOSAxMy4wMzE5eiIgZmlsbD0iI2YyYWEwMCIvPjxwYXRoIGQ9Im05My4xOTY2IDk1LjA2MjFjLjIzNjggMCAuNDczNi0uMjM2OS40NzM2LS40NzM4di0xLjE4NDdjMC0uMjM3LS4yMzY4LS40NzM5LS40NzM2LS40NzM5aC04LjA1MTFjLS4yMzY4IDAtLjQ3MzYuMjM2OS0uNDczNi40NzM5djEuMTg0N3MwIC4yMzY5LjIzNjguMjM2OWguMjM2OC45NDcyYzEuMTg0IDAgMy4wNzgzLjcxMDggMy4zMTUxIDIuNjA2M2gtNC4yNjIzYy0uMjM2OCAwLS40NzM2LjIzNjktLjQ3MzYuNDczOXYxLjE4NDdjMCAuMjM2OS4yMzY4LjQ3MzguNDczNi40NzM4aDQuMDI1NWMtLjcxMDQgMS40MjIxLTIuNjA0OCAyLjEzMjEtMy41NTE5IDIuMzY5MS0uNDczNiAwLS40NzM2LjQ3NC0uMjM2OC45NDhsNS42ODMxIDYuMTZjLjIzNjguMjM3LjQ3MzYuMjM3LjQ3MzYgMGwuNzEwNC0uOTQ3Yy4yMzY4LS4yMzcuMjM2OC0uNDc0IDAtLjQ3NGwtNC4yNjI0LTQuMjY1czIuODQxNi0uOTQ4IDMuNTUyLTMuNTU0MWgxLjQyMDhjLjIzNjggMCAuNDczNi0uMjM3LjQ3MzYtLjQ3Mzl2LTEuMTg0N2MwLS4yMzY5LS4yMzY4LS40NzM5LS40NzM2LS40NzM5aC0xLjE4NGMwLTEuMTg0Ni0uNDczNi0yLjEzMjQtMS4xODQtMi42MDYzeiIgZmlsbD0iI2ZmZTQ2ZSIvPjxwYXRoIGQ9Im03NS40MzU5IDk5LjU2NTFoLTIuNjA0OGMwLTkuMjQwNSA3LjU3NzUtMTYuNTg1NiAxNi41NzU4LTE2LjU4NTZ2Mi4zNjk0Yy03LjgxNDMgMC0xMy45NzEgNi4zOTczLTEzLjk3MSAxNC4yMTYyeiIgZmlsbD0iI2ZmZTQ2ZSIvPjxwYXRoIGQ9Im0yOS4yNjA4IDM1LjgyOTNjLS40NzM2LS45NDc3LjIzNjgtMS44OTU1IDEuMTg0LTIuMTMyNCAyLjM2OC0uNDczOSA2LjYzMDMtLjcxMDggOS43MDg3IDMuNzkxIDQuNDk5MiA2LjYzNDIgNC4wMjU2IDEzLjk3OTMgNy41Nzc1IDE0LjkyNzEgMy41NTIuOTQ3NyAzNy4xNzczLTI2LjUzNzEgNDEuMjAyOS0yNC42NDE2cy0xNy43NTk4IDI1LjgyNjMtMTcuNzU5OCAyNS44MjYzIDEwLjQxOTEgMTIuNTU3NyA5Ljk0NTUgMjEuNTYxMy0xMy40OTc1IDIyLjc0Ni0yNy45NDIyIDIzLjIxOTljLTYuMTU2OC4yMzY5LTkuNzA4NyA5LjAwNDEtMTkuMTgwNi0yLjEzMjQtNS42ODMyLTYuMzk3NC02Ljg2NzItMTMuNTA1NS01LjIwOTYtMTkuOTAyOCAxLjQyMDgtNi4zOTczIDUuMjA5Ni0xNC40NTMyIDQuNDk5Mi0yNC40MDQ2LS40NzM2LTcuMTA4MS0yLjg0MTYtMTMuNTA1NS00LjAyNTYtMTYuMTExOHoiIGZpbGw9IiNmZjkyYWMiLz48cGF0aCBkPSJtNDkuMzg4IDY5LjcxMnMxLjQyMDggMS40MjE2IDIuODQxNi43MTA4YzIuMTMxMS0uOTQ3NyA0LjAyNTUtNC45NzU3IDguNzYxNS03LjU4MiAwIDAtNy4zNDA3IDYuMzk3My04Ljc2MTUgMTEuNjEgMCAwLTMuMDc4NC0xLjQyMTctMi44NDE2LTQuNzM4OHoiIGZpbGw9IiNmNzUyNzYiLz48cGF0aCBkPSJtNTMuMTc2OCA3OC4wMDI1czEuNjU3NiAxLjQyMTcgMy43ODg3LS4yMzY5YzIuMTMxMi0xLjY1ODYgMTAuNjU2LTcuNTgyIDEwLjY1Ni03LjU4MnMtMTAuODkyOCA5Ljk1MTQtMTAuNjU2IDEyLjU1NzdjLS4yMzY4IDAtMi44NDE1LS45NDc4LTMuNzg4Ny00LjczODh6IiBmaWxsPSIjZjc1Mjc2Ii8+PHBhdGggZD0ibTI5Ljk3MSA3MS4xMzMycy0zLjMxNTEtLjcxMDgtNy44MTQzIDYuMTYwNGMtNC40OTkxIDYuODcxMi05LjQ3MTkgMTIuNTU3Ny04LjA1MTEgMTcuMjk2NCAxLjQyMDggNC43Mzg4IDEzLjk3MSAyMy4yMiAyNS4zMzczIDIyLjc0NiAxMS4xMjk1LS40NzQgMTYuMzM5MS0xNC42OSAxNi4zMzkxLTE0LjY5LTEyLjMxMzUtMi4xMzMtMjcuMjMxOC0xOC40ODEyLTI2Ljk5NS0yNy43MjE4IDAgMCAuNzEwNC0yLjEzMjQgMS4xODQtMy43OTF6IiBmaWxsPSIjYTg5MmY3Ii8+PHBhdGggZD0ibTYwLjk5MTIgODUuNTg3NnMzLjMxNTIgMS4xODQ3IDEzLjI2MDctNS4yMTI2YzAgLjIzNjktOS43MDg3IDkuOTUxNC0xMy4yNjA3IDUuMjEyNnoiIGZpbGw9IiNmNzUyNzYiLz48cGF0aCBkPSJtNzEuMTczMSA1My4zNjM1cy01LjQ0NjMtNS42ODY1LTE1LjM5MTkgNC45NzU2YzAgMCA4LjA1MTItNy4zNDUgMTYuNTc1OS0zLjA4MDF6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0ibTI4Ljc4ODIgNzQuOTIzOHMtMi4xMzExIDUuNDQ5NiA0LjQ5OTIgMTQuNDUzMmM2LjYzMDQgOS4wMDM3IDE2LjMzOTEgMTYuMzQ5IDIwLjM2NDYgMTQuOTI3IDQuMDI1Ni0xLjQyMiAyLjEzMTItNi4zOTcyIDIuMTMxMi02LjM5NzJzLTQuOTcyNy0uMjM3LTcuNTc3NS43MTA4Yy0yLjYwNDguOTQ3Ny0xNy4yODYzLTEyLjc5NDYtMTkuNDE3NS0yMy42OTM4eiIgZmlsbD0iIzM0Mzc1OCIvPjxnIGZpbGw9IiNmZmRhMTIiPjxwYXRoIGQ9Im00Ni43ODQyIDI5LjY2NzgtMTEuNjAzMS0xMS4xMzZjLS45NDcyLS43MTA4LS43MTA0LTIuMTMyNS4yMzY4LTIuODQzM2wyLjg0MTYtMi4xMzI0Yy45NDcyLS43MTA4IDIuMzY4LS40NzM5IDIuODQxNi43MTA4bDcuODE0MyAxMy45NzkzYy4yMzY4LjIzNyAwIC40NzM5LS4yMzY4LjcxMDhsLS45NDcyLjcxMDhjLS40NzM2LjIzNy0uOTQ3Mi4yMzctLjk0NzIgMHoiLz48cGF0aCBkPSJtNTUuMDcxNSAyNS44NzcxLTIuODQxNi0xNS44NzQ5Yy0uMjM2OC0uOTQ3NzEuNDczNi0yLjEzMjQgMS42NTc2LTIuMTMyNGwzLjMxNTItLjQ3Mzg3YzEuMTg0LS4yMzY5NCAyLjEzMTIuNzEwODEgMi4xMzEyIDEuODk1NWwtMS4xODQgMTYuMzQ4NjdjMCAuMjM3LS4yMzY4LjQ3MzktLjQ3MzYuNDczOWwtMS44OTQ0LjIzNjljLS4yMzY4IDAtLjcxMDQtLjIzNjktLjcxMDQtLjQ3Mzh6Ii8+PHBhdGggZD0ibTY1LjcyNzUgMjQuMjE5MyAyLjg0MTYtMTEuODQ2OGMuMjM2OC0xLjE4NDcgMS40MjA4LTEuNjU4NiAyLjM2NzktMS40MjE3bDEuODk0NC43MTA4Yy45NDcyLjQ3MzkgMS40MjA4IDEuNDIxNyAxLjE4NCAyLjYwNjRsLTQuNzM1OSAxMS4zNzNjLS4yMzY4LjIzNjktLjQ3MzYuNDczOS0uNzEwNC4yMzY5bC0yLjEzMTItLjk0NzdjLS43MTA0LS4yMzctLjk0NzItLjQ3MzktLjcxMDQtLjcxMDl6Ii8+PC9nPjwvc3ZnPg=="/></div></div></div>
      <p className="hNEJVw">Hassle-free claims</p>
      <p className="jUPFYr">We’re on a mission to make insurance claims stress-free. Just give us a call or file a claim online and experience cashless, speedy claim settlements.</p>
      
      
      
      </div>
      
      </div>

      </div>

      </div>
      <hr style={{marginTop:"85px",color:"#efe8e8!important"}}/>
      <div className="hLiOzT" style={{marginTop:"-40px"}}> <div className="lguFxl">
     
    
     
    
     
        
       <div className="vl"></div>
    

      
     <Ackogeneral/>
      </div>
      <Cin/>

    </div>

    <div style={{marginTop:"200px"}}></div>
    </div>
  
  );
}
export default New;
