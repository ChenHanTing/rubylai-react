import 'styles/about.scss';
import rubyAbout from "images/about/ruby-about.jpg";

function About() {
  return (
    <div className="About">
      <div className="about-img">
        <img src={rubyAbout} alt="" />
      </div>

      <div className="about-desc">
        <div className="author">賴鈺嬿 / Ruby Lai</div>
        <p>古典音樂出身的創作者與攝影師，畢業於國立臺北藝術大學音樂研究所，主修聲樂。</p>
        <p>近年專職攝影與影像創作，系列作品曾入選新光三越國際攝影大賽。</p>
        <p>創作靈感來自音樂與生命經驗，</p>
        <p>認為無論是攝影或是音樂，</p>
        <p>都是一種美好的說話方式。</p>
      </div>
    </div>
  );
}

export default About;
