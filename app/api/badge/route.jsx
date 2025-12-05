import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get('username');

  if (!username) {
    return new Response('Username required', { status: 400 });
  }

  const userData = {
    username: username,
    avatar: "https://dreamhack-media.s3.amazonaws.com/user/876524f1f83b7d6ad83a5898310fc0563577980a8e63dc975a5aff4bc7b4f8ed.png",
    level: 11,
    tier: "SILVER II",
    points: "2,304",
    rank: "1030",
  };



  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
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
        {/* <img
          src={DH_LOGO}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
          }}
        /> */}

        {/* LEFT COLUMN: Identity */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', marginRight: '20px', width: '35%' }}>
          <img
            src={userData.avatar}
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              border: '3px solid #a6a8ff',
              marginBottom: '10px'
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontSize: 28, fontWeight: '800', letterSpacing: '-0.5px', whiteSpace: 'nowrap', overflow: 'hidden' }}>
              {userData.username}
            </div>
            <div style={{ display: 'flex', fontSize: 16, color: '#a6a8ff', fontWeight: 'bold' }}>
              dreamhack.io
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Stats Grid (2x2) */}
        {/* We use flex: 1 on this container so it takes up the remaining space */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>

          {/* Row 1 */}
          <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', width: '100%' }}>
            <StatBox label="COMMUNITY LEVEL" value={userData.level} icon="⭐️" />
            <StatBox label="CTF TIER" value={userData.tier} icon="🛡️" />
          </div>

          {/* Row 2 */}
          <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', width: '100%' }}>
            <StatBox label="WARGAME POINTS" value={userData.points} icon="🎯" />
            <StatBox label="GLOBAL RANK" value={`#${userData.rank}`} icon="🏆" />
          </div>

        </div>
      </div>
    ),
    {
      width: 580, // Standard Banner Width
      height: 220, // Reduced Height for "Badge" look
    }
  );
}

// Updated Helper Component
const StatBox = ({ label, value, icon, color = 'white' }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    // KEY CHANGE: flex: 1 forces this box to take equal width as its neighbor
    flex: 1, 
    // Justify center helps vertically align the content if one box is taller, 
    // though here we use padding for sizing.
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