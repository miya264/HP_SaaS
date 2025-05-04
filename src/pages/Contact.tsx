import React from 'react';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  React.useEffect(() => {
    document.title = 'お問い合わせ - InsightSync';
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section
        title="お問い合わせ"
        subtitle="ご質問や導入のご相談など、お気軽にご連絡ください。"
        className="pt-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary-950">連絡先情報</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">所在地</h4>
                  <p className="text-gray-600">
                    〒100-0001<br />
                    東京都千代田区テック地区AIアベニュー123<br />
                    InsightSyncビル
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">電話番号</h4>
                  <p className="text-gray-600">03-1234-5678</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">メールアドレス</h4>
                  <p className="text-gray-600">info@insightsync.ai</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">営業時間</h4>
                  <p className="text-gray-600">
                    平日 9:00〜18:00（JST）<br />
                    土日祝：休業
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary-950">SNSでも最新情報を発信中</h3>
              <p className="text-gray-600 mb-6">
                最新のお知らせや活用事例はSNSでもご覧いただけます。
              </p>
              <div className="flex space-x-4">
                {['twitter', 'linkedin', 'facebook'].map((platform, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="bg-primary-50 w-10 h-10 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-100 transition-colors duration-300"
                  >
                    <span className="sr-only">{platform}</span>
                    <div className="w-5 h-5 bg-primary-600 rounded-sm"></div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </Section>

      {/* Map Section */}
      <Section
        title=""
        className="bg-gray-50 pt-0"
      >
        <div className="rounded-xl overflow-hidden shadow-lg h-96 bg-gray-200">
          {/* Placeholder for map */}
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <p className="text-gray-500 font-medium">地図（準備中）</p>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section
        title="よくあるご質問"
        subtitle="お問い合わせの多い内容をまとめました。"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              question: "どれくらい早く利用開始できますか？",
              answer: "ほとんどのお客様は1〜2営業日以内にご利用開始いただけます。導入・連携もサポートします。"
            },
            {
              question: "個別デモは可能ですか？",
              answer: "はい、貴社のご要望に合わせたデモを実施可能です。お気軽にご相談ください。"
            },
            {
              question: "契約期間の縛りはありますか？",
              answer: "スタンダードは月額・年額から選択可能（年額は割引あり）。エンタープライズは通常12ヶ月〜です。"
            },
            {
              question: "無料トライアルの内容は？",
              answer: "10日間全機能をお試しいただけます。クレジットカード不要、最大5名まで追加可能です。"
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
            >
              <h3 className="text-lg font-semibold mb-3 text-primary-950">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section
        title=""
        className="bg-gray-50 py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-950">
            組織の意思決定を進化させませんか？
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            10日間の無料トライアルや個別デモもご用意しています。お気軽にご相談ください。
          </p>
          <div className="inline-block bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
            <span className="text-primary-950 font-medium">ここから新しい意思決定体験を</span>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Contact;