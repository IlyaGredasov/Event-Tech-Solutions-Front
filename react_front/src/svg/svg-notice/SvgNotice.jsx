import React, { useRef, useState, useEffect } from "react";
import NoticeModal from "../../components/notice-modal/NoticeModal";

const SvgNotice = function () {
  const [isOpenNoticeModal, setIsOpenNoticeModal] = useState(null);
  const noticeModalRef = useRef(null);

  const toggleNoticeModal = () => {
    setIsOpenNoticeModal(!isOpenNoticeModal);
  };

  const closeNoticeModal = () => {
    setIsOpenNoticeModal(false);
  };

  const handleClickOutside = (event) => {
    if (
      noticeModalRef.current &&
      !noticeModalRef.current.contains(event.target)
    ) {
      closeNoticeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        onClick={toggleNoticeModal}
        className="notice"
        style={{ display: "flex" }}
      >
        <svg
          width="2.135vw"
          height="2.135vw"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.2672 22.9018L34.3898 22.3178C33.7499 21.8919 33.2253 21.3142 32.8628 20.6362C32.5004 19.9583 32.3113 19.2012 32.3125 18.4325V13.9792C32.3125 11.0618 32.3125 7.7605 30.8112 5.08316C29.0085 1.86983 25.5712 0.3125 20.3125 0.3125C15.0538 0.3125 11.6192 1.8725 9.81384 5.07783C8.31251 7.75783 8.31251 11.0618 8.31251 13.9765V18.4352C8.31209 19.2028 8.12198 19.9584 7.7591 20.6349C7.39623 21.3113 6.87182 21.8876 6.23251 22.3125L5.36051 22.8965C3.80567 23.9302 2.53095 25.3328 1.65012 26.979C0.769285 28.6253 0.309745 30.4641 0.312512 32.3312V34.9792H14.9792C14.9216 35.6941 15.0201 36.4131 15.2678 37.0863C15.5154 37.7595 15.9064 38.3708 16.4136 38.878C16.9208 39.3853 17.5322 39.7762 18.2054 40.0239C18.8785 40.2716 19.5975 40.37 20.3125 40.3125C21.0275 40.37 21.7465 40.2716 22.4196 40.0239C23.0928 39.7762 23.7042 39.3853 24.2114 38.878C24.7186 38.3708 25.1096 37.7595 25.3572 37.0863C25.6049 36.4131 25.7034 35.6941 25.6458 34.9792H40.3125V32.3312C40.3144 30.4652 39.8548 28.6278 38.9745 26.9826C38.0942 25.3374 36.8206 23.9355 35.2672 22.9018ZM4.43784 30.9792C4.61734 30.0177 4.98782 29.102 5.52739 28.2863C6.06695 27.4705 6.76464 26.7712 7.57917 26.2298L8.45384 25.6458C9.64182 24.8554 10.6158 23.7834 11.2891 22.5253C11.9623 21.2672 12.3139 19.8621 12.3125 18.4352V13.9712C12.3125 11.4298 12.3125 8.80316 13.2992 7.03783C13.9605 5.86983 15.4058 4.3125 20.3125 4.3125C25.2218 4.3125 26.6672 5.86983 27.3258 7.0405C28.3152 8.80583 28.3152 11.4298 28.3125 13.9738V18.4378C28.3115 19.8643 28.6633 21.2688 29.3366 22.5264C30.0098 23.784 30.9836 24.8556 32.1712 25.6458L33.0485 26.2298C33.8624 26.7716 34.5595 27.471 35.0986 28.2867C35.6377 29.1025 36.0078 30.018 36.1872 30.9792H4.43784Z"
            fill="#1A1918"
          />
        </svg>
      </button>
      {isOpenNoticeModal && <NoticeModal noticeModalRef={noticeModalRef} />}
    </>
  );
};

export default SvgNotice;
