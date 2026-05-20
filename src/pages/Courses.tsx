import { useEffect } from 'react';
import { Masthead } from '../components/Masthead';
import { Footer } from '../components/Footer';
import { courses, MARKETPLACE_ENABLED, totalHours } from '../data/courses';
import type { Course } from '../data/courses';

const LEVEL_CLASS: Record<Course['level'], string> = {
  Beginner:     'course-level-beginner',
  Intermediate: 'course-level-intermediate',
  Advanced:     'course-level-advanced',
};

function CourseCard({ course, index }: { course: Course; index: number }) {
  const price = course.price_inr.toLocaleString('en-IN');
  const isLive = MARKETPLACE_ENABLED && !!course.payment_link;

  return (
    <article className={`course-card${index % 2 === 0 ? '' : ' course-card-alt'}`}>
      {!MARKETPLACE_ENABLED && (
        <div className="course-overlay">
          <span className="course-overlay-icon">🔒</span>
          <span className="course-overlay-label">Coming Soon</span>
          <span className="course-overlay-sub">Enrollments open shortly</span>
        </div>
      )}

      <div className="course-accent" style={{ background: course.accent }} />

      <div className="course-body">
        <div className="course-meta">
          <span className="course-num">0{course.id}</span>
          <span className={`course-level ${LEVEL_CLASS[course.level]}`}>{course.level}</span>
        </div>

        <h3 className="course-title">{course.title}</h3>
        <p className="course-desc">{course.description}</p>

        <div className="course-tags">
          {course.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>

        <div className="course-footer">
          <span className="course-duration">⏱ {course.duration_hrs} hrs</span>
          <span className="course-price">₹{price}</span>
        </div>
      </div>

      {isLive ? (
        <a className="course-cta" href={course.payment_link} target="_blank" rel="noopener noreferrer">
          ENROLL NOW ↗
        </a>
      ) : (
        <span className="course-cta course-cta-disabled">ENROLL NOW ↗</span>
      )}
    </article>
  );
}

export function Courses() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Courses — Manav Rathi';
    return () => { document.title = 'Manav Rathi — Software Engineer · Cloud & DevOps · SDET-II at Affle'; };
  }, []);

  return (
    <>
      <Masthead activePage="courses" />

      <section className="course-hero">
        <span className="s-eyebrow">[ VIII · COURSES ]</span>
        <h1 className="course-hero-title">
          Learn from the<br />
          <em className="holo">trenches.</em>
        </h1>
        <p className="course-hero-sub">
          Not theory. Real systems. Real tradeoffs.<br />
          Real production scars — distilled into curriculum.
        </p>
        <div className="course-stats">
          {[
            { num: courses.length,           lbl: 'Courses'        },
            { num: `${totalHours} HRS`,      lbl: 'Total Content'  },
            { num: '5+',                     lbl: 'Yrs Production' },
            { num: MARKETPLACE_ENABLED ? 'LIVE ✓' : 'SOON', lbl: 'Status' },
          ].map(s => (
            <div key={s.lbl} className="course-stat">
              <span className="course-stat-num">{s.num}</span>
              <span className="course-stat-lbl">{s.lbl}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">
          <span className="s-eyebrow">[ Curriculum ]</span>
          <h2 className="s-title">The <em className="cobalt">Curriculum</em></h2>
          <p className="s-deck">Each course is drawn from production incidents, real migrations, and systems at scale.</p>
        </div>
        <div className="container course-grid">
          {courses.map((c, i) => <CourseCard key={c.id} course={c} index={i} />)}
        </div>
      </section>

      <div className="divider" />

      <section className="course-notify">
        <div className="container course-notify-inner">
          <div>
            <span className="s-eyebrow" style={{ color: 'var(--cream)', opacity: 0.5 }}>[ Stay Updated ]</span>
            <h2 className="course-notify-title">
              More courses dropping <em className="holo">soon.</em>
            </h2>
            <p className="course-notify-sub">
              Follow the work. Get notified when a new course goes live —<br />
              no spam, one email per drop.
            </p>
          </div>
          <div className="course-notify-form">
            <div className="course-notify-input-row">
              <input type="email" placeholder="your@email.com" className="course-notify-input" />
              <button className="course-notify-btn">NOTIFY ME ↗</button>
            </div>
            <p className="course-notify-note">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
