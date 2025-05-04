import React from 'react';
import Section from '../components/Section';
import PricingCard from '../components/PricingCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  React.useEffect(() => {
    document.title = '料金プラン - InsightSync';
  }, []);

  const pricingPlans = [
    {
      title: "無料トライアル",
      price: "無料",
      description: "InsightSyncの全機能を10日間無料でお試しいただけます。",
      features: [
        { title: "会議自動要約", included: true },
        { title: "重要ポイント抽出", included: true },
        { title: "アクションアイテム管理", included: true },
        { title: "基本連携（Slack, Zoom）", included: true },
        { title: "基本分析ダッシュボード", included: true },
        { title: "10日間利用", included: true },
        { title: "最大5ユーザー", included: true },
        { title: "メールサポート", included: true },
        { title: "高度なチーム分析", included: false },
        { title: "カスタム連携", included: false },
        { title: "優先サポート", included: false }
      ],
      ctaText: "無料トライアルを始める",
      ctaLink: "/contact",
      popular: false
    },
    {
      title: "スタンダード",
      price: "¥9,800",
      description: "中小規模チームに最適なプランです。",
      features: [
        { title: "会議自動要約", included: true },
        { title: "重要ポイント抽出", included: true },
        { title: "アクションアイテム管理", included: true },
        { title: "全連携（Slack, Zoom, Teams等）", included: true },
        { title: "全分析ダッシュボード", included: true },
        { title: "無制限利用", included: true },
        { title: "最大25ユーザー", included: true },
        { title: "メール・チャットサポート", included: true },
        { title: "高度なチーム分析", included: true },
        { title: "カスタム連携", included: false },
        { title: "優先サポート", included: false }
      ],
      ctaText: "申し込む",
      ctaLink: "/contact",
      popular: true
    },
    {
      title: "エンタープライズ",
      price: "個別見積もり",
      description: "大規模組織や高度な要件に対応するプランです。",
      features: [
        { title: "会議自動要約", included: true },
        { title: "重要ポイント抽出", included: true },
        { title: "アクションアイテム管理", included: true },
        { title: "全連携＋新規連携優先対応", included: true },
        { title: "全分析ダッシュボード", included: true },
        { title: "無制限利用", included: true },
        { title: "ユーザー数無制限", included: true },
        { title: "24時間365日サポート", included: true },
        { title: "高度なチーム分析", included: true },
        { title: "カスタム連携", included: true },
        { title: "専任カスタマーサクセスマネージャー", included: true }
      ],
      ctaText: "お問い合わせ",
      ctaLink: "/contact",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "無料トライアルはどのように利用できますか？",
      answer: "InsightSyncの全機能を10日間、クレジットカード不要でご利用いただけます。最大5名までチームメンバーを追加可能です。"
    },
    {
      question: "いつでも解約できますか？",
      answer: "はい、いつでも解約可能です。月額・年額プランがあり、年額は割引があります。解約後も契約期間終了まではご利用いただけます。"
    },
    {
      question: "料金はどのように決まりますか？",
      answer: "スタンダードプランは最大25ユーザーまで月額9,800円です。エンタープライズはご要望に応じて個別見積もりとなります。"
    },
    {
      question: "非営利団体や教育機関向けの割引はありますか？",
      answer: "はい、対象となる非営利団体・教育機関には特別価格をご用意しています。詳細はお問い合わせください。"
    },
    {
      question: "サポート内容は？",
      answer: "全プランでメールサポート、スタンダードはチャットサポート、エンタープライズは24時間365日サポートと専任担当がつきます。"
    },
    {
      question: "プランの変更は可能ですか？",
      answer: "もちろん可能です。アップグレードは即時、ダウングレードは次回更新時に適用されます。"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section
        title="シンプルで分かりやすい料金体系"
        subtitle="組織に最適なプランをお選びください。追加料金や隠れた費用はありません。"
        className="pt-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              ctaText={plan.ctaText}
              ctaLink={plan.ctaLink}
              popular={plan.popular}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            カスタムプランをご希望の方は、<Link to="/contact" className="text-primary-600 hover:text-primary-700 font-medium">営業担当までご相談ください</Link>
          </p>
        </div>
      </Section>

      {/* Feature Comparison */}
      <Section
        title="機能比較"
        subtitle="各プランの違いを比較できます。"
        className="bg-gray-50"
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary-50">
                <th className="text-left px-4 py-3 text-primary-950 font-semibold border-b border-gray-200">機能</th>
                <th className="text-center px-4 py-3 text-primary-950 font-semibold border-b border-gray-200">無料トライアル</th>
                <th className="text-center px-4 py-3 text-primary-950 font-semibold border-b border-gray-200 bg-primary-100">スタンダード</th>
                <th className="text-center px-4 py-3 text-primary-950 font-semibold border-b border-gray-200">エンタープライズ</th>
              </tr>
            </thead>
            <tbody>
              {[
                "会議要約",
                "アクションアイテム管理",
                "意思決定抽出",
                "基本連携",
                "高度な連携",
                "カスタム連携",
                "基本分析",
                "高度な分析",
                "ユーザー上限",
                "利用上限",
                "メールサポート",
                "チャットサポート",
                "優先サポート",
                "専任サクセスマネージャー",
                "カスタムブランディング",
                "SSO・高度なセキュリティ"
              ].map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 border-b border-gray-200 font-medium">{feature}</td>
                  <td className="text-center px-4 py-3 border-b border-gray-200">
                    {["会議要約", "アクションアイテム管理", "意思決定抽出", "基本連携", "基本分析", "メールサポート"].includes(feature) ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : feature === "ユーザー上限" ? (
                      <span>5ユーザー</span>
                    ) : feature === "利用上限" ? (
                      <span>10日間</span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="text-center px-4 py-3 border-b border-gray-200 bg-primary-50">
                    {["会議要約", "アクションアイテム管理", "意思決定抽出", "基本連携", "高度な連携", "基本分析", "高度な分析", "メールサポート", "チャットサポート"].includes(feature) ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : feature === "ユーザー上限" ? (
                      <span>25ユーザー</span>
                    ) : feature === "利用上限" ? (
                      <span>無制限</span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="text-center px-4 py-3 border-b border-gray-200">
                    {feature === "ユーザー上限" ? (
                      <span>無制限</span>
                    ) : feature === "利用上限" ? (
                      <span>無制限</span>
                    ) : (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* FAQセクション */}
      <Section
        title="よくあるご質問"
        subtitle="料金やサービスに関するご質問にお答えします。"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
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
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            もっと質問がある場合は、サポートにお問い合わせください。
          </p>
          <Link to="/contact" className="btn btn-primary inline-flex items-center">
            サポートに問い合わせる
          </Link>
        </div>
      </Section>

      {/* Testimonial */}
      <Section
        title=""
        className="gradient-bg text-white py-20"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-8 text-secondary-300">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-12 h-12 mx-auto"
            >
              <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
            </svg>
          </div>
          <p className="text-2xl text-white mb-8 leading-relaxed">
            「InsightSyncを導入してから、会議時間が40%削減され、意思決定の質も大きく向上しました。」
          </p>
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-primary-700 mr-4"></div>
            <div className="text-left">
              <p className="font-semibold text-white">山本 明子</p>
              <p className="text-gray-300">COO, グローバルイノベーションズ</p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section
        title=""
        className="bg-white py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-950">
            今すぐ無料トライアルを始めませんか？
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            10日間の無料トライアルはクレジットカード不要でご利用いただけます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-primary bg-white text-primary-950 hover:bg-gray-100">
              無料トライアルを申し込む
            </Link>
            <Link to="/contact" className="btn btn-secondary border-white text-primary-950 hover:bg-white/10">
              デモを依頼する
            </Link>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Pricing;