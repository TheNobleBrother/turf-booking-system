export interface Blog {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  authorRole: string;
  category: string;
  image: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    slug: "mastering-perfect-cover-drive",
    title: "Mastering the Perfect Cover Drive",
    excerpt:
      "Tips and drills to improve your batting technique and scoring rate.",
    content: `
            <p>The cover drive is often considered the most aesthetic shot in cricket. When played correctly, it's a blend of balance, timing, and elegance. However, mastering it requires rigorous practice and attention to detail.</p>
            
            <h3>1. The Setup</h3>
            <p>Your stance should be balanced, with feet shoulder-width apart. As the bowler releases the ball, identify the length early. A cover drive is typically played to a full-length delivery outside the off-stump.</p>
            
            <h3>2. The Footwork</h3>
            <p>Leaning into the shot is crucial. Your front foot should move towards the line of the ball, but not so far across that you lose balance. Your head should be over the ball at the moment of impact.</p>
            
            <h3>3. The Impact</h3>
            <p>Use your top hand for control and your bottom hand for power. Aim to hit the ball under your eyes. Follow through with a high elbow pointing towards the target area.</p>
            
            <blockquote>"The cover drive is not just a shot; it's a statement of confidence." - Famous Cricket Coach</blockquote>
            
            <p>Keep practiced with these drills: the 'drop ball' drill where a coach drops the ball from a height for you to drive, and the 'tee' drill for stationary target practice.</p>
        `,
    date: "June 15, 2024",
    author: "Rahul Sharma",
    authorRole: "Senior Cricket Coach",
    category: "Cricket",
    image:
      "https://images.pexels.com/photos/3602833/pexels-photo-3602833.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    slug: "5-stretches-every-badminton-player-needs",
    title: "5 Stretches Every Badminton Player Needs",
    excerpt: "Prevent injuries and improve agility with this pre-game routine.",
    content: `
            <p>Badminton is a high-intensity sport involving rapid changes of direction, jumps, and explosive lunges. Without proper warming up and stretching, the risk of muscle strains and joint injuries is high.</p>
            
            <h3>1. Forward Lunge Stretch</h3>
            <p>Targets the hip flexors and quadriceps. Essential for those deep lunges at the net.</p>
            
            <h3>2. Dynamic Shoulder Circles</h3>
            <p>Warms up the rotator cuff. Helps in more powerful smashes and better racket control.</p>
            
            <h3>3. Calf Stretches</h3>
            <p>Prevents Achilles tendonitis. Vital for the constant jumping and pushing off the back foot.</p>
            
            <h3>4. Wrist Rotations</h3>
            <p>Improving wrist flexibility allows for better 'flick' shots and deceptive net play.</p>
            
            <h3>5. Lateral Neck Stretch</h3>
            <p>Releases tension from tracking the shuttlecock high in the air.</p>
            
            <p>Perform each stretch for at least 30 seconds after a light 5-minute jog. Never stretch 'cold' muscles as it can lead to micro-tears.</p>
        `,
    date: "June 12, 2024",
    author: "Priya Patel",
    authorRole: "Fitness Specialist",
    category: "Badminton",
    image:
      "https://images.pexels.com/photos/2202685/pexels-photo-2202685.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    slug: "football-formations-explained",
    title: "Football Formations Explained",
    excerpt:
      "Understanding 4-4-2 vs 4-3-3 and which suits your 5-a-side team best.",
    content: `
            <p>Choosing the right formation can be the difference between winning and losing. It dictates how your team covers space, transitions between phases, and creates scoring opportunities.</p>
            
            <h3>The Classic 4-4-2</h3>
            <p>Known for its balance and structure. It's easy for players to understand their roles. However, it can sometimes be outnumbered in midfield by teams playing with three central midfielders.</p>
            
            <h3>The Modern 4-3-3</h3>
            <p>Favored by teams who want to dominate possession. The three midfielders provide a strong core, while the three forwards can press high or stretch the defense. It requires high fitness and tactical discipline.</p>
            
            <h3>Which for 5-a-side?</h3>
            <p>In 5-a-side, formations are more fluid. A common choice is the 'Diamond' (1-2-1) or the 'Box' (2-2). The key is versatility—every player must be willing to defend and attack.</p>
            
            <p>Successful teams often adapt their formation mid-game depending on the opponent's strategy. Communication is your most important tool on the pitch.</p>
        `,
    date: "June 10, 2024",
    author: "David Miller",
    authorRole: "Tactical Analyst",
    category: "Football",
    image:
      "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export function getBlogById(id: number | string) {
  return blogs.find((blog) => blog.id === Number(id));
}
