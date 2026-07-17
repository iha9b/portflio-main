import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const smalArr = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return smalArr === buttonCategory;
    });

    setArr(newArr);
  };

  return (
  <main id="main" className="flex">
      <section className="flex  left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
           <button
          onClick={() => {
            handleClick("bootstrap");
          }}
          className={currentActive === "bootstrap" ? "active" : null}
        >
        Bootstrap
        </button>
        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React 
        </button>
      </section>

      <section className=" flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="  card"
              >
                <img width={266} src={item.imgPath} />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">{item.projectParagraph}</p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a
                        href={item.linkDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.projectTitle} demo`}
                        className="icon-link"
                      />

                      <a
                        href={item.linkGitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.projectTitle} github`}
                        className="icon-github"
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
