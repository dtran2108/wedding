import { Brygada_1918, Playfair_Display } from 'next/font/google'

export const DEFAULT_BOX_SHADOW = '0px 8px 24px 0px #AE585240'
export const SECTION_STYLE = 'w-full h-full rounded-lg'

export const contentFont = Playfair_Display({
  subsets: ['latin', 'vietnamese'],
})

export const titleFont = Brygada_1918({ subsets: ['latin', 'vietnamese'] })

export const scrollToHash = function (element_id: string) {
  const element = document.getElementById(element_id)
  element?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  })
}

export const storiesContent = [
  {
    image: '/images/story-0.jpeg',
    date: '',
    title: 'Giới thiệu cô dâu chú rể',
    content:
      'Ngày hôm nay, chúng ta hân hạnh chứng kiến sự kết hợp đẹp đẽ giữa cô dâu Mai và chú rể Tuấn. Mai là cô con gái xinh đẹp, tài năng của một gia đình nổi tiếng tại Hà Nội. Cô sắp hoàn thành bằng Thạc sĩ Kinh doanh tại một trường danh tiếng và đang làm việc cho một công ty lớn. Tuấn là chàng trai thông minh, năng động đến từ Đà Nẵng. Anh đã tốt nghiệp loại ưu từ ngành Kỹ sư Cơ khí và hiện đang điều hành một doanh nghiệp khởi nghiệp thành công trong lĩnh vực công nghệ. Cả hai gặp nhau trong một chuyến đi du lịch và nhanh chóng bị hấp dẫn bởi con người của nhau. Sau nhiều năm hẹn hò, hôm nay họ chính thức quyết định gắn kết đời mình.',
  },
  {
    image: '/images/story-1.jpeg',
    date: 'Tháng Tư 2010',
    title: 'Thảm họa cà phê',
    content:
      'Mai nhầm bộ đồ mới của Tuấn cho một người giữ khăn ăn, vô tình làm đổ cà phê của cô lên khắp anh ta tại một quán cà phê nhộn nhịp.Cuộc gặp gỡ đầu tiên của họ liên quan đến một máy giặt khô, rất nhiều lời xin lỗi và một trái phiếu bất ngờ đối với các sản phẩm may mặc màu.',
  },
  {
    image: '/images/story-2.jpeg',
    date: 'Tháng Tám 2012',
    title: 'Mối quan hệ hỗn loạn',
    content:
      'Mai, dễ bị say tàu xe, kết thúc trong lòng Tuấn trong một chuyến bay gập ghềnh đến Paris.Tuấn, cố gắng trở thành người đàn ông, nhầm lẫn nắm bắt sự kìm kẹp của cô ấy về một cử chỉ tình cảm, dẫn đến một hành trình ấm cúng nhưng lúng túng trên Đại Tây Dương.',
  },
  {
    image: '/images/story-3.jpeg',
    date: 'Tháng Năm 2013',
    title: 'Hài kịch ẩm thực',
    content:
      'Nỗ lực của Tuấn trong một bữa tối lãng mạn kết thúc bằng một chuông báo cháy, một lasagna bị cháy và lời thề sẽ không bao giờ chạm vào bếp lò nữa.Cuộc hẹn đầu tiên của họ đã trở thành một bữa tiệc khiêu vũ nhà bếp đầy ngẫu hứng, hoàn thành với pizza và tiếng cười.',
  },
  {
    image: '/images/story-4.jpeg',
    date: 'Tháng Bảy 2014 - Tháng Chín 2016',
    title: 'Những kẻ nghịch ngợm đi khắp thế gian',
    content:
      'Những cuộc phiêu lưu du lịch của Mai và Tuấn bao gồm bị lạc trong bản dịch ở Tokyo, vô tình tham gia một cuộc thi salsa ở Cuba và thoát khỏi một đàn hải âu quyết tâm ở Venice.',
  },
  {
    image: '/images/story-5.jpeg',
    date: 'Tháng Hai 2017',
    title: 'Tối hậu thư của mèo',
    content:
      'Mai nói đùa Tuấn với cả đời trang trí theo chủ đề mèo trừ khi anh ta cầu hôn.Tuấn, sợ cơn thịnh nộ của những con mèo gốm, đã đưa ra gợi ý và bắt đầu âm mưu một đề xuất sẽ khiến ngay cả người phụ nữ mèo hoài nghi nhất ngất ngây.',
  },
  {
    image: '/images/story-6.jpeg',
    date: 'Tháng Tư 2019',
    title: 'Đề xuất chơi khăm',
    content:
      'Tuấn đã tổ chức một đề xuất chơi khăm công phu liên quan đến một chiếc nhẫn giả và một mob flash bất ngờ.Cú sốc ban đầu của Mai biến thành tiếng cười khi Tuấn tiết lộ chiếc nhẫn thực sự ẩn giấu bên trong một con kỳ lân bơm hơi khổng lồ.',
  },
  {
    image: '/images/story-7.jpeg',
    date: 'Tháng Một 2020 - Tháng Ba 2022',
    title: 'Tai ương đám cưới',
    content:
      'Từ vật lộn với những người bán hoa bướng bỉnh đến vô tình gửi lời mời với ngày sai, hành trình lập kế hoạch đám cưới của Mai và Tuấn giống như một kịch bản sitcom.Mỗi tai nạn chỉ đưa họ lại gần nhau hơn giữa sự hỗn loạn.',
  },
]

export const agendaContent = [
  {
    time: '4:30 PM - 7:00 PM',
    content:
      'Lễ tân bắt đầu.Bữa tối được phục vụ, bánh mì nướng, khiêu vũ đầu tiên, cắt bánh và quăng bó hoa.',
    image: '/images/agenda-1.jpeg',
  },
  {
    time: '7:00 PM - 7:30 PM',
    content: 'Cô dâu và chú rể cảm ơn khách và làm tròn cho mỗi bàn.',
    image: '/images/agenda-2.jpeg',
  },
  {
    time: '7:30 PM - 9:00 PM',
    content:
      'Khiêu vũ và Mingling tiếp tục.Gian hàng hình ảnh và đồ ăn nhẹ đêm khuya có sẵn.',
    image: '/images/agenda-3.jpeg',
  },
  {
    time: '9:00 PM',
    content: 'Cuộc gọi cuối cùng cho rượu.',
    image: '/images/agenda-4.jpeg',
  },
  {
    time: '9:30 PM',
    content: 'Khiêu vũ và chia tay cuối cùng.',
    image: '/images/agenda-5.png',
  },
  {
    time: '9:30 PM trở đi',
    content:
      'Cặp vợ chồng mới cưới khởi hành cho bộ tuần trăng mật hoặc sau bữa tiệc.',
    image: '/images/agenda-6.jpeg',
  },
]
