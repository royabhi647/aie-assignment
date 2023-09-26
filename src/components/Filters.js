import React, { useState } from "react";

function Filters() {
  const [Class, setClass] = useState("");
  const [classUserInteracted, setClassUserInteracted] = useState(false);

  const [topic, setTopic] = useState("");
  const [topicUserInteracted, setTopicUserInteracted] = useState(false);

  const [level, setLevel] = useState("");
  const [levelUserInteracted, setLevelUserInteracted] = useState(false);

  const [subject, setSubject] = useState("");
  const [subjectUserInteracted, setSubjectUserInteracted] = useState(false);

  const [subTopic, setSubTopic] = useState("");
  const [subTopicUserInteracted, setSubTopicUserInteracted] = useState(false);

  const [quizType, setQuizType] = useState("");
  const [quizTypeUserInteracted, setQuizTypeUserInteracted] = useState(false);

  const handleOnClassChange = (e) => {
    setClass(e.target.value);
    setClassUserInteracted(true);
  };

  const handleOnTopicChange = (e) => {
    setTopic(e.target.value);
    setTopicUserInteracted(true);
  };

  const handleOnLevelChange = (e) => {
    setLevel(e.target.value);
    setLevelUserInteracted(true);
  };

  const handleOnSubjectChange = (e) => {
    setSubject(e.target.value);
    setSubjectUserInteracted(true);
  };

  const handleOnSubTopicChange = (e) => {
    setSubTopic(e.target.value);
    setSubTopicUserInteracted(true);
  };

  const handleOnQuizTypeChange = (e) => {
    setQuizType(e.target.value);
    setQuizTypeUserInteracted(true);
  };

  return (
    <div
      style={{
        width: "974px",
        height: "352px",
        background: "#FFF",
        marginTop: "32px",
        borderRadius: "12px",
      }}
    >
      <div style={{ display: "flex", marginLeft: "48px" }}>
        <div style={{ marginTop: "56px" }}>
          <select
            style={{
              width: "411px",
              height: "64px",
              background: "#F5F6F7",
              borderRadius: "12px",
              color: "#707070",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: 600,
              marginBottom: "24px",
            }}
            name="class"
            value={Class}
            onChange={handleOnClassChange}
            onClick={handleOnClassChange}
          >
            {!classUserInteracted && <option value={"default"}>Class</option>}
            <option value={"one"} style={{ marginLeft: "32px" }}>
              1
            </option>
            <option value={"two"}>2</option>
            <option value={"three"}>3</option>
            <option value={"four"} style={{ marginLeft: "32px" }}>
              4
            </option>
            <option value={"five"}>5</option>
            <option value={"six"}>6</option>
            <option value={"seven"} style={{ marginLeft: "32px" }}>
              7
            </option>
            <option value={"eight"}>8</option>
            <option value={"nine"}>9</option>
            <option>Add class</option>
          </select>

          <select
            style={{
              width: "411px",
              height: "64px",
              background: "#F5F6F7",
              borderRadius: "12px",
              color: "#707070",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: 600,
              marginBottom: "24px",
            }}
            name="topic"
            value={topic}
            onChange={handleOnTopicChange}
            onClick={handleOnTopicChange}
          >
            {!topicUserInteracted && <option value={"default"}>Topic</option>}
            <option value={"biology"} style={{ marginLeft: "32px" }}>
              Biology
            </option>
            <option value={"chemistry"}>Chemistry</option>
            <option value={"physics"}>Physics</option>
            <option>Add topic</option>
          </select>

          <select
            style={{
              width: "411px",
              height: "64px",
              background: "#F5F6F7",
              borderRadius: "12px",
              color: "#707070",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: 600,
              marginBottom: "24px",
            }}
            name="level"
            value={level}
            onChange={handleOnLevelChange}
            onClick={setLevelUserInteracted}
          >
            {!levelUserInteracted && <option value={"default"}>Level</option>}
            <option value={"begineer"} style={{ marginLeft: "32px" }}>
              Begineer
            </option>
            <option value={"intermediate"}>Intermediate</option>
            <option value={"advance"}>Advance</option>
          </select>
        </div>
        <div style={{ marginTop: "56px" }}>
          <select
            style={{
              width: "411px",
              height: "64px",
              background: "#F5F6F7",
              borderRadius: "12px",
              color: "#707070",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: 600,
              marginBottom: "24px",
            }}
            name="subject"
            value={subject}
            onChange={handleOnSubjectChange}
            onClick={handleOnSubjectChange}
          >
            {!subjectUserInteracted && (
              <option value={"default"}>Subject</option>
            )}
            <option value={"science"} style={{ marginLeft: "32px" }}>
              Science
            </option>
            <option value={"mathematics"}>Mathematics</option>
            <option value={"physics"}>History</option>
            <option>Add subject</option>
          </select>

          <select
            style={{
              width: "411px",
              height: "64px",
              background: "#F5F6F7",
              borderRadius: "12px",
              color: "#707070",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: 600,
              marginBottom: "24px",
            }}
            name="subTopic"
            value={subTopic}
            onChange={handleOnSubTopicChange}
            onClick={handleOnSubTopicChange}
          >
            {!subTopicUserInteracted && (
              <option value={"default"}>Sub topic</option>
            )}
            <option value={"genetics"} style={{ marginLeft: "32px" }}>
              Genetics
            </option>
            <option value={"ecology"}>Ecology</option>
            <option value={"human anatomy"}>Human anatomy</option>
            <option>Add subtopic</option>
          </select>

          <select
            style={{
              width: "411px",
              height: "64px",
              background: "#F5F6F7",
              borderRadius: "12px",
              color: "#707070",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: 600,
              marginBottom: "24px",
            }}
            name="quizType"
            value={quizType}
            onChange={handleOnQuizTypeChange}
            onClick={handleOnQuizTypeChange}
          >
            {!quizTypeUserInteracted && (
              <option value={"default"}>quiz type</option>
            )}
            <option
              value={"multiple choice single"}
              style={{ marginLeft: "32px" }}
            >
              Multiple choice - Single answer
            </option>
            <option value={"multiple choice multiple"}>
              Multiple choice - multiple answer
            </option>
            <option value={"yes or no"}>Yes or No</option>
            <option value={"true or false"}>True or False</option>
            <option>Add new</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filters;
