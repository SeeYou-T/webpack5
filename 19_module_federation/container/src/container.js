import React from "react";

export default function Header() {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <li key={item}>item {item}</li>
      ))}
    </div>
  );
}
