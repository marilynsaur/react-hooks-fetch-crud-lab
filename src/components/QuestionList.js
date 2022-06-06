import React, { useEffect, useState } from "react";

function QuestionList() {
  //const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState([]);

  
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((items) => setItems(items));
  }, []);
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
    </section>
  );
}

export default QuestionList;
