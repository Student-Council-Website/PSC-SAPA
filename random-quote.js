// random-quote.js

// ข้อมูลสมาชิกสภาสภานักเรียน (ครบ 44 คน)
const councilMembers = [
    {
        name: "นางสาวพาขวัญ นวลสำลี",
        role: "Executive / ประธานนักเรียน",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/1.png",
        quote: "ความเจ็บปวดในวันวาน คือความแข็งแกร่งในวันนี้"
    },
    {
        name: "นายกฤษณะกันท์ ไข่แก้ว",
        role: "Executive / รองประธานนักเรียน",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/2.png",
        quote: "อย่ากลัวคนอื่นจะไปไกล กลัวตัวเองไม่ไปไหนดีกว่า "
    },
    {
        name: "นางสาวธัญญรัตน์ หมื่นรัตน์",
        role: "Executive / รองประธานนักเรียน",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/3.png",
        quote: "หากวันนี้ผิดพรุ่งนี้พร้อมแก้เสมอ"
    },
    {
        name: "นางสาวปรียากาญจน์ ใจกล้า",
        role: "Admin / บริหารงานทั่วไป",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/4.png",
        quote: "พัฒนาตัวเองในทุก ๆ วัน เพื่อเป็นเวอร์ชันที่ดีที่สุดของตัวเอง"
    },
    {
        name: "นางสาวอชิริญา หารภูมิ",
        role: "Admin / บริหารงานทั่วไป",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/5.png",
        quote: "อยากเป็นพลังงานบวกให้ทุกๆคน"
    },
    {
        name: "นางสาวชญานิศ บุญมา",
        role: "Admin / บริหารงานทั่วไป",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/6.png",
        quote: "-"
    },
    {
        name: "นางสาวพิมพ์ลภัส สุขนิธิกุลวงศ์",
        role: "Admin / บริหารงานทั่วไป",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/7.png",
        quote: "-"
    },
    {
        name: "นางสาวธนัญญา ตันประเสริฐ",
        role: "Admin / บริหารงานทั่วไป",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/8.png",
        quote: "อนาคตที่ดี เริ่มจากการตั้งใจทำหน้าที่วันนี้ให้ดีที่สุด"
    },
    {
        name: "นางสาวเขมิกา ศักด์เสรีกุล",
        role: "Admin / บริหารงานทั่วไป",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/9.png",
        quote: "ทุก ๆ อย่างต้องใช้เวลา"
    },
    {
        name: "นายสิทธิโชค แสงสว่าง",
        role: "Discipline / สารวัตรนักเรียน",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/10.png",
        quote: "เราต้องการความถูกต้อง ไม่ใช่ถูกใจ"
    },
    {
        name: "นายชัยภัทร นรสาร",
        role: "Discipline / สารวัตรนักเรียน",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/11.png",
        quote: "อย่าคิดว่าทำไม่ได้ถ้ายังไม่ลงมือทำ"
    },
    {
        name: "นางสาวธัญชนก ธนวุฒิคติวรกุล",
        role: "Discipline / สารวัตรนักเรียน",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/12.png",
        quote: "ความสุขอยู่ในสิ่งเล็กๆรอบตัวเรา"
    },
    {
        name: "นางสาวอุษา ยิ้ม",
        role: "Discipline / สารวัตรนักเรียน",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/13.png",
        quote: "มุมมองต่อโลกขึ้นอยู่กับตัวเรา"
    },
    {
        name: "นางสาววีรดา พูลสมบัติ",
        role: "Discipline / สารวัตรนักเรียน",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/14.png",
        quote: "อย่ากลัวในสิ่งที่เราสามารถสู้หรือเปลี่ยนแปลงมันได้"
    },
    {
        name: "นางสาวสุพิชญา กลิ่นเกลี้ยง",
        role: "Discipline / สารวัตรนักเรียน",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/15.png ",
        quote: "-"
    },
    {
        name: "นายแทนคุณ เบญมาตย์",
        role: "Discipline / สารวัตรนักเรียน",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/16.png",
        quote: "เอาที่ตัวเองไหว ถ้าเหนื่อยก็พัก ท้อได้แต่ห้ามถอย"
    },
    {
        name: "นางสาวฐานิดา รื่นเริง",
        role: "Academic / การเรียน",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/17.png",
        quote: "Live like what you are"
    },
    {
        name: "นางสาวกัญญารัตน์ แสงสว่าง",
        role: "Academic / การเรียน",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/18.png",
        quote: "ไม่ต้องเก่งที่สุด แค่ทำให้ดีที่สุดก็พอ"
    },
    {
        name: "นางสาววรพัชรา ศรีบุญเรือง",
        role: "Academic / การเรียน",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/19.png",
        quote: "อย่ากลัวความผิดพลาด ถ้ายังไม่ได้ลองทำ"
    },
    {
        name: "นางสาวฐิตาภา พวงพิศ",
        role: "Academic / การเรียน",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/20.png",
        quote: "ให้อภัยคนอื่นคือการปลดปล่อยตัวเองจากความโกรธ"
    },
    {
        name: "นางสาวพลอยปภัส นัยวิจารณ์",
        role: "Academic / การเรียน",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/21.png",
        quote: "เรียนรู้ เติบโต และพัฒนาตัวเองเสมอ"
    },
    {
        name: "นายตรีรัตน์ ปิติไพศาลกุล",
        role: "Academic / การเรียน",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/22.png",
        quote: "คล้อยตามคือสามัญ ฝืนทวนคือเซียน"
    },
    {
        name: "นางสาวพิชามญช์ หาญอาสา",
        role: "Academic / การเรียน",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/23.png",
        quote: "ไม่จำเป็นต้อง perfect แค่ยอมรับความไม่สมบูรณ์แบบของตัวเอง"
    },
    {
        name: "นางสาววาศิณี ปู่ไข่",
        role: "Activity / กิจกรรม",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/24.png",
        quote: "กระทำตัวให้เท่กว่าเมื่อวาน"
    },
    {
        name: "นางสาวอารีรัตน์ บัวทอง",
        role: "Activity / กิจกรรม",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/25.png",
        quote: "-"
    },
    {
        name: "นางสาวดิรัชญา ขาวผ่อง",
        role: "Activity / กิจกรรม",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/26.png",
        quote: "มุ่งมั่นแล้วไปต่อ"
    },
    {
        name: "นางสาวภควดี หมื่นพล",
        role: "Activity / กิจกรรม",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/27.png",
        quote: "เคล็ดลับของความสุขคือทำในสิ่งที่รัก ส่วนเคล็ดลับของความสำเร็จคือรักในสิ่งที่ทำ"
    },
    {
        name: "นายปภังกร ปัญญาใส",
        role: "Activity / กิจกรรม",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/28.png",
        quote: "มีแล้วไม่ใช้ดีกว่าใช้แล้วไม่มี"
    },
    {
        name: "นายจักรเพ็ชร บุญโสม",
        role: "Activity / กิจกรรม",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/29.png",
        quote: "-"
    },
    {
        name: "นางสาวชุติกาญจน์ กันยาเนียม",
        role: "Activity / กิจกรรม",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/30.png",
        quote: "อย่าพึ่งบอกว่ายาก ถ้ายังไม่ลองทำ"
    },
    {
        name: "นายพชร กาเผือก",
        role: "Works / การงาน",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/31.png",
        quote: "มีชีวิตครั้งเดียว ต้องใช้ให้คุ้ม"
    },
    {
        name: "นายพิชญะ วงศรีแก้ว",
        role: "Works / การงาน",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/32.png",
        quote: "ไม่พยายาม ก็ไม่โต"
    },
    {
        name: "นายรัฐภูมิ ลีทอง",
        role: "Works / การงาน",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/33.png",
        quote: "-"
    },
    {
        name: "นายเจริญชัย ทองแพง",
        role: "Works / การงาน",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/34.png",
        quote: "-"
    },
    {
        name: "นายกิตติพงษ์ เชื้อเมืองพาน",
        role: "Works / การงาน",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/35.png",
        quote: "พอใจเท่าที่มี ยินดีเท่าที่ได้"
    },
    {
        name: "นายกิตติพัทธ์ เชื่อเมืองพาน",
        role: "Works / การงาน",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/36.png",
        quote: "-"
    },
    {
        name: "นางสาวพณิตา ทองสว่างแจ้ง",
        role: "Works / การงาน",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/37.png",
        quote: "ข้างหน้าคือความฝัน ข้างหลัง คือบทเรียน"
    },
    {
        name: "นายธนกฤต สุวรรณาวุธ",
        role: "PR / ประชาสัมพันธ์",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/38.png",
        quote: "ชีวิตอาจจะพังบ้าง แต่ก็ยังต้องก้าวต่อไปข้างหน้าอยู่ดี"
    },
    {
        name: "นางสาวนพรัตน์ สารรัตน์",
        role: "PR / ประชาสัมพันธ์",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/39.png",
        quote: "Love yourself and be who you want to be."
    },
    {
        name: "นางสาวอภิญญาภรณ์ บุญหนา",
        role: "PR / ประชาสัมพันธ์",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/40.png",
        quote: "End of beginning "
    },
    {
        name: "นางสาวศศิธร หงษา",
        role: "PR / ประชาสัมพันธ์",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/41.png",
        quote: "ข่าวสารไว ใส่ใจทุกคน"
    },
    {
        name: "นางสาวฐานิดา พลอารีย์",
        role: "PR / ประชาสัมพันธ์",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/42.png",
        quote: "อย่าเก็บอดีตมาทำร้ายตนเอง แต่จงหัดที่จะเรียนรู้จากมัน"
    },
    {
        name: "นางสาวนภัสสร ประทุมมา",
        role: "PR / ประชาสัมพันธ์",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/43.png",
        quote: "ความสุขอยู่ที่เราคิด ชีวิตอยู่ที่เราสร้าง"
    },
    {
        name: "นางสาวกฤตยากร วงค์สงคราม",
        role: "PR / ประชาสัมพันธ์",
        image: "images/รูปสภานักเรียนแบบไม่มีพื้นหลัง/44.png",
        quote: "-"
    }
];

function hasCompleteQuoteData(member) {
    const clean = (value) => String(value || '').trim();
    return clean(member.name) &&
        clean(member.role) &&
        clean(member.image) &&
        clean(member.image) !== '-' &&
        clean(member.quote) &&
        clean(member.quote) !== '-';
}

function shuffleQuoteIndexes(indexes) {
    const shuffled = [...indexes];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function getNextQuoteMember(validIndexes) {
    const poolKey = 'pioneer_quote_pool_v2';
    const lastKey = 'pioneer_quote_last_v2';
    const validSet = new Set(validIndexes);
    let pool = [];

    try {
        pool = JSON.parse(sessionStorage.getItem(poolKey) || '[]')
            .filter(index => validSet.has(index));
    } catch (_) {
        pool = [];
    }

    if (pool.length === 0) {
        pool = shuffleQuoteIndexes(validIndexes);
        const lastIndex = Number(sessionStorage.getItem(lastKey));
        if (pool.length > 1 && pool[0] === lastIndex) {
            pool.push(pool.shift());
        }
    }

    const selectedIndex = pool.shift();
    sessionStorage.setItem(poolKey, JSON.stringify(pool));
    sessionStorage.setItem(lastKey, String(selectedIndex));
    return councilMembers[selectedIndex];
}

function displayRandomQuote() {
    const validIndexes = councilMembers
        .map((member, index) => hasCompleteQuoteData(member) ? index : -1)
        .filter(index => index >= 0);

    if (validIndexes.length === 0) return;

    const selectedMember = getNextQuoteMember(validIndexes);
    const quoteImage = document.getElementById('quote-image');
    const quoteText = document.getElementById('quote-text');
    const quoteName = document.getElementById('quote-name');
    const quoteRole = document.getElementById('quote-role');
    const quoteShowcase = document.querySelector('.quote-showcase');

    if (!quoteImage || !quoteText || !quoteName || !quoteRole) return;

    quoteShowcase?.classList.add('quote-is-changing');

    window.setTimeout(() => {
        quoteImage.src = selectedMember.image.trim();
        quoteImage.alt = selectedMember.name;
        quoteText.textContent = "“" + selectedMember.quote.trim() + "”";
        quoteName.textContent = selectedMember.name;
        quoteRole.textContent = selectedMember.role;
        quoteShowcase?.classList.remove('quote-is-changing');
    }, 260);
}
