import React, { useReducer, useState } from "react";
import "./faq.css";
import arrow from "../../assets/icon-arrow.svg";
import Button from "../../components/button/Button";


export default function FAQ() {

  function reducer(state, action) {
    switch (action.type) {
      case "one":
        return {
          ...state,
          one: !(state.one),
        }
      case "two":
        return {
          ...state,
          two: !(state.two),
        }
      case "three":
        return {
          ...state,
          three: !(state.three),
        }
      case "four":
        return {
          ...state,
          four: !(state.four),
        }
      default:
       return state;
    }
  }

  const [active, setActive] = useReducer(reducer, { one: false, two: false, three: false, four: false });

  return (
    <div className="bm__faq | mx-auto">
      <div className="bm__faq_heading-container | text-center flow">
        <h1 className="secondary-heading">Frequently Asked Questions</h1>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <div className="bm__faq_questions-container">
        <div className="bm__faq_question" data-expanded={`${active.one ? true : false}`} onClick={() => setActive({ type: "one" })}>
          <span>What is Bookmark?</span>
          <img src={arrow} alt="arrow-down" />
        </div>
        <div className={`bm__faq_answer ${active.one ? "bm__faq_answer-active" : null}`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </p>
        </div>

        <div className="bm__faq_question" data-expanded={`${active.two ? true : false}`} onClick={() => setActive({ type: "two" })}>
          <span>How can I request a new browser?</span>
          <img src={arrow} alt="arrow-down" />
        </div>
        <div className={`bm__faq_answer ${active.two ? "bm__faq_answer-active" : null}`}>
          <p>
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </p>
        </div>

        <div className="bm__faq_question" data-expanded={`${active.three ? true : false}`} onClick={() => setActive({ type: "three" })} >
          <span>Is there a mobile app?</span>
          <img src={arrow} alt="arrow-down" />
        </div>
        <div className={`bm__faq_answer ${active.three ? "bm__faq_answer-active" : null}`}>
          <p>
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus
            vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
            quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
            ex et ultricies bibendum.
          </p>
        </div>

        <div className="bm__faq_question" data-expanded={`${active.four ? true : false}`} onClick={() => setActive({ type: "four" })} >
          <span>What about other Chromium browsers?</span>
          <img src={arrow} alt="arrow-down" />
        </div>
        <div className={`bm__faq_answer ${active.four ? "bm__faq_answer-active" : null}`}>
          <p>
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit.
          </p>
        </div>
      </div>
      <Button text="More Info"/>
    </div>
  );
}
