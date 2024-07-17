import Image from 'next/image';
import headshot from '@/public/images/avatars/headshot.png';
import book1 from '@/public/images/books/1984.jpg';
import book2 from '@/public/images/books/thousandbrains.jpg';
import book3 from '@/public/images/books/atomichabits.jpg';
import reading from '@/public/images/books/atlasshrugged.jpg'
import chesspiece from '@/public/images/books/chessbishop.png'

export default function Bio() {
  return (
    <section className="mt-8 flex gap-x-12 sm:mt-20">
      {/* Bio text */}
      <div className="flex flex-col gap-y-3 sm:mt-2 sm:gap-y-6">
        <p>
        Full stack software engineer based in Falls Church, Virginia. 
        </p>
        <p>
        Experienced in JavaScript, Golang, Python, Ruby, Node.js, React, AWS, Docker, DNS, Terraform, and PostgreSQL. 
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '0px'
        }}>
          <div style={{
            display: 'inline-block',
            marginRight: '0px',
            paddingRight: '100px'
          }}>
            <p>Books I Like</p>
            <div style={{
              display: 'inline-block',
              marginRight: '20px'
            }}>
              <Image src={book1} alt="Book 1 Cover" style={{
                objectFit: 'cover'
              }} />
            </div>
            <div style={{
              display: 'inline-block',
              marginRight: '20px'
            }}>
              <Image src={book2} alt="Book 2 Cover" style={{
                objectFit: 'cover'
              }} />
            </div>
            <div style={{
              display: 'inline-block'
            }}>
              <Image src={book3} alt="Book 3 Cover" style={{
                objectFit: 'cover'
              }} />
            </div>
          </div>
          <div style={{
            display: 'inline-block',
            marginLeft: '0px',
            paddingLeft: '0px'
          }}>
            <p>Reading</p>
            <Image src={reading} alt="Reading Cover" style={{
                objectFit: 'cover'
            }} />
          </div>
          <div style={{
            display: 'inline-block',
            marginLeft: '0px',
            paddingLeft: '100px'
          }}>
            <p>Hobby</p>
            <Image src={chesspiece} alt="Chess Piece" style={{
                objectFit: 'cover'
            }} />
          </div>
        </div>
      </div>
      {/* Avatar, hidden on mobile */}
      <div className="hidden w-[170px] shrink-0 sm:block">
        <Image
          src={headshot}
          alt="Nathaniel Xu"
          placeholder="blur"
          className="rounded-full border border-gray-200"
          quality={100}
          priority
        />
      </div>
    </section>
  );
}
