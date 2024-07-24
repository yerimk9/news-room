import React from "react";

function Modal({ isVisible, onClose }) {
  return (
    <div className={`modal ${isVisible ? "show" : "none"}`}>
      <div className="modal__middle">
        <div className="modal__inner">
          <div className="modal__content">
            <p className="modal__sub-title">뉴스를 넘어, 더 깊은 이해를 위한 탐색</p>
            <h2 className="modal__title">더 깊은 질문을 탐색하며, </h2>
            <p className="modal__p">
             여기, 우리가 제공하는 것은 단순히 뉴스 기사가 아닙니다. 우리의 웹사이트는 최신 뉴스와 정보를 넘어, 독자 여러분이 세상의 흐름을 깊이 이해할 수 있도록 돕기 위해 존재합니다. 단순한 정보 전달을 넘어서, 의미 있는 해석과 통찰을 제공합니다.
            </p>
            <p className="modal__p">
           매일 업데이트되는 뉴스 기사를 통해 신속하고 정확한 정보를 제공하되, 우리의 목표는 그 이상입니다. 뉴스의 표면을 넘어서 사건의 배경과 맥락을 제시하고, 다양한 관점을 통해 보다 균형 잡힌 시각을 갖출 수 있도록 돕습니다.
            </p>
            <p className="modal__p">
              현대 사회에서는 뉴스 속에 숨겨진 이야기와 의미를 이해하는 것이 중요합니다. 우리는 각 기사를 단순히 보여주는 것이 아니라, 독자 여러분이 스스로 생각하고 분석할 수 있는 공간을 제공합니다. 이 과정에서 우리의 웹사이트는 단순한 뉴스 플랫폼을 넘어, 지적 호기심과 이해를 키우는 도구가 될 것입니다.
            </p>

            <p className="modal__p">우리는 항상 신뢰할 수 있는 출처에서 정보를 제공하며, 정확성을 최우선으로 합니다. 단순히 정보를 나열하는 것이 아니라, 그 정보를 통해 더 나은 결정을 내리고, 깊이 있는 대화를 나눌 수 있도록 돕는 것을 목표로 합니다.</p>
             <p className="modal__p">우리 웹사이트는 여러분이 빠르게 변하는 세상을 이해하고, 스스로의 의견과 관점을 형성하는 데 기여하고자 합니다. 복잡하고 변화무쌍한 현대 사회에서, 우리와 함께 의미 있는 탐색을 시작해 보세요.</p>
            <div className="close-button">
              <button
                type="button"
                className="close-button__a"
                onClick={onClose}
              >
                <span className="close-button__text">닫다</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
