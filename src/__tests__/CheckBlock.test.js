import React from "react";
import { shallow, mount } from "enzyme";
import { expect } from "chai";
import CheckBlock from "../Components/CheckBlock";
import mockData from "../mock-data/mock-data";

const data = mockData[0];

describe("<CheckBlock />", () => {
  it("renders without crashing", () => {
    shallow(
      <CheckBlock
        text={<p>{data.text}</p>}
        media={data.media}
        mediaType={data.mediaType}
        answers={data.answers}
        correctAnswer={data.correctAnswer}
        message={data.message}
      />
    );
  });

  it("loads mock data", () => {
    const wrapper = mount(
      <CheckBlock
        text={<p>{data.text}</p>}
        media={data.media}
        mediaType={data.mediaType}
        answers={data.answers}
        correctAnswer={data.correctAnswer}
        message={data.message}
      />
    );
    expect(wrapper.find(".checkBlock p").text()).to.equal(data.text);
    expect(wrapper.find(".checkBlock img").prop("src")).to.equal(data.media);

    wrapper.find(".checkBlock .list-group-item").forEach((li) => {
      expect(data.answers.includes(li.text())).to.equal(true);
    });
  });
});
