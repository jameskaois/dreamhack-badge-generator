import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(req) {
  const userId = '88740'; // <----- CHANGE THIS
  const targetUrl = `https://dreamhack.io/users/${userId}/`;

  let userData = {
    username: "User",
    avatar: "https://dreamhack.io/assets/default_avatar.png",
    level: "-",
    tier: "-",
    points: "-",
    rank: "-",
  };

  try {
    const response = await fetch(targetUrl, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
        }
    });
    
    if (response.ok) {
      const html = await response.text();

      
      const usernameMatch = html.match(/class="nickname lg wrap"[^>]*>\s*(.*?)\s*<\/span>/);
      if (usernameMatch) userData.username = usernameMatch[1].trim();

     
      const avatarMatch = html.match(/class="b-avatar-img"[^>]*>\s*<img\s+src="([^"]+)"/);
      if (avatarMatch) userData.avatar = avatarMatch[1]
      else userData.avatar = "data:image/png;base64,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";

      const levelMatch = html.match(/class="level"[^>]*>\s*(\d+)\s*<\/span>/);
      if (levelMatch) userData.level = levelMatch[1];

      const tierMatch = html.match(/class="tier-text[^>]*>\s*(.*?)\s*<\/span>/);
      if (tierMatch) userData.tier = tierMatch[1].trim()
        else userData.tier = "Unranked";

      const pointsMatch = html.match(/POINT<\/div>\s*<div[^>]*>\s*([0-9,]+)\s*pt/);
      if (pointsMatch) userData.points = pointsMatch[1];

      const rankMatch = html.match(/RANK<\/div>\s*<div[^>]*>\s*(#[0-9,]+)/);
      if (rankMatch) userData.rank = rankMatch[1].replace('#', ''); // Remove # for cleaner display if needed
    }
  } catch (e) {
    console.error("Failed to fetch Dreamhack profile", e);
  }



  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '18px', 
          backgroundColor: '#0f0f0f',
          borderRadius: '16px',
          color: 'white',
          fontFamily: '"Inter", sans-serif',
          position: 'relative',
          boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)',
          backgroundColor: "#002147",
        backgroundImage: "linear-gradient(315deg, #002147 0%, #3b3c36 74%)"

        }}
      >

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: '16px', width: '35%' }}>
          <img
            src={userData.avatar}
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              border: '3px solid #a6a8ff'
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontSize: 28, fontWeight: '800', letterSpacing: '-0.5px', whiteSpace: 'nowrap', overflow: 'hidden' }}>
              {userData.username}
            </div>
            <div style={{ display: 'flex', fontSize: 16, color: '#a6a8ff', fontWeight: 'bold', position: 'relative', marginTop: '16px' }}>
              <svg data-v-0daa1eb0="" role="img" width="9.25rem" height="1.4rem" viewBox="0 0 185 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="logo-desktop"><path d="M27.822 8.36475C20.799 1.5632 10.5544 -1.08022 0.964964 1.43454C-1.63167 10.7187 1.09781 20.6403 8.12081 27.4448L8.17516 27.4974C17.7767 24.9768 25.2737 17.7161 27.8764 8.41738L27.822 8.36475Z" fill="#8D98FF"></path> <path d="M27.8802 8.41764L20.1053 10.4587C15.3257 11.7132 10.22 10.3944 6.71758 7.00529L0.96875 1.43772C10.5582 -1.07996 20.8028 1.56639 27.8258 8.36794L27.8802 8.42057V8.41764Z" fill="#7A8AFF"></path> <path d="M27.879 8.41722C25.2763 17.716 17.7792 24.9766 8.17773 27.4972L10.3034 19.8945C11.5866 15.3036 15.2883 11.7186 20.0287 10.4758L27.879 8.41431V8.41722Z" fill="#607FFF"></path> <path d="M10.2827 19.9703L8.17516 27.5L8.12081 27.4474C1.09781 20.6458 -1.63167 10.7242 0.964964 1.43713L6.71379 7.00471C10.2162 10.3967 11.5749 15.3414 10.2796 19.9703H10.2827Z" fill="#A6A8FF"></path>         </svg>
              <div style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '30px'}}>dreamhack.io</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>

          <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', width: '100%' }}>
            <StatBox label="COMMUNITY LEVEL" value={userData.level} icon="⭐️" />
            <StatBox label="CTF TIER" value={userData.tier} icon="🛡️" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', width: '100%' }}>
            <StatBox label="WARGAME POINTS" value={userData.points} icon="🎯" />
            <StatBox label="GLOBAL RANK" value={`#${userData.rank}`} icon="🏆" />
          </div>

        </div>
      </div>
    ),
    {
      width: 580,
      height: 220,
    }
  );
}

const StatBox = ({ label, value, icon, color = 'white' }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',

    flex: 1, 


    justifyContent: 'center', 
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.1)'
  }}>
    <div style={{ display: 'flex', fontSize: 11, color: '#9ca3af', marginBottom: '6px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
      {label}
    </div>
    <div style={{ display: 'flex', alignItems: 'center', fontSize: 22, fontWeight: 'bold', color: color }}>
      <span style={{ marginRight: '8px', fontSize: '18px' }}>{icon}</span>
      {value}
    </div>
  </div>
);