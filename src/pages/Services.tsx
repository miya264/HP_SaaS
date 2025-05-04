import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  BarChart2, 
  Users, 
  Zap, 
  FileText, 
  CheckCircle,
  Calendar,
  PieChart,
  Check, 
  ArrowRight,
  Globe,
  Layers,
  Shield,
  Code
} from 'lucide-react';

const Services: React.FC = () => {
  React.useEffect(() => {
    document.title = 'サービス - InsightSync';
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section
        title="当社のサービス"
        subtitle="InsightSyncは、AIを活用した多彩なツール群で、組織の意思決定プロセスを革新します。"
        className="pt-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary-950">組織コミュニケーションの変革</h3>
            <p className="text-gray-600 mb-6">
              InsightSyncは、会議・チャット・ドキュメントでやり取りされる貴重な情報をAIで分析・整理し、組織の意思決定を支えるインサイトに変換します。
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'リアルタイムでの会話分析と要約',
                'アクションアイテムの自動抽出・追跡',
                '既存ツールとのクロスプラットフォーム連携',
                'チームの方向性可視化とモニタリング'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-primary inline-flex items-center">
              お問い合わせ
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team collaboration" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </Section>

      {/* Core Features Section */}
      <Section
        title="主な機能"
        subtitle="組織の意思決定を加速するAI搭載ツールを幅広くご用意しています。"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <MessageSquare className="h-8 w-8" />,
              title: "会議インテリジェンス",
              description: "会議内容を自動で要約し、アクションアイテムや重要ポイントをナレッジベースに整理します。",
              features: [
                "リアルタイム文字起こし・要約",
                "感情分析・合意形成の可視化",
                "アクションアイテムの自動割り当て",
                "会議の有効性スコアリング"
              ]
            },
            {
              icon: <BarChart2 className="h-8 w-8" />,
              title: "意思決定アナリティクス",
              description: "意思決定の傾向や実行状況を可視化し、組織の判断力向上を支援します。",
              features: [
                "意思決定ダッシュボード",
                "実行率のモニタリング",
                "成果測定ツール",
                "過去の意思決定分析"
              ]
            },
            {
              icon: <Users className="h-8 w-8" />,
              title: "チームアラインメント",
              description: "合意点・相違点を特定し、チームの一体感と実行力を高めます。",
              features: [
                "チーム感情のトラッキング",
                "アラインメントの可視化",
                "貢献度分析",
                "ズレのアラート通知"
              ]
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="bg-primary-50 w-16 h-16 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary-950">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Integrations Section */}
      <Section
        title="連携サービス"
        subtitle="InsightSyncは、主要なコミュニケーション・業務ツールとシームレスに連携します。"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { icon: <span className="text-blue-500 text-lg">Slack</span>, name: "Slack" },
            { icon: <span className="text-green-500 text-lg">Zoom</span>, name: "Zoom" },
            { icon: <span className="text-blue-600 text-lg">Google Meet</span>, name: "Google Meet" },
            { icon: <span className="text-blue-400 text-lg">Microsoft Teams</span>, name: "MS Teams" },
            { icon: <span className="text-red-500 text-lg">Google Calendar</span>, name: "Google Calendar" },
            { icon: <span className="text-blue-800 text-lg">Outlook</span>, name: "Outlook" },
            { icon: <span className="text-blue-500 text-lg">Jira</span>, name: "Jira" },
            { icon: <span className="text-teal-500 text-lg">Notion</span>, name: "Notion" },
            { icon: <span className="text-purple-600 text-lg">Asana</span>, name: "Asana" },
            { icon: <span className="text-orange-500 text-lg">Clickup</span>, name: "Clickup" },
          ].map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {integration.icon}
              <p className="mt-2 text-gray-700">{integration.name}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            ご希望のツールが見当たらない場合は、お気軽にご相談ください。
          </p>
          <Link to="/contact" className="btn btn-secondary inline-flex items-center">
            連携リクエストを送る
          </Link>
        </div>
      </Section>

      {/* Implementation Process */}
      <Section
        title="導入の流れ"
        subtitle="InsightSyncの導入はスムーズかつ迅速です。"
        className="bg-gray-50"
      >
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary-200 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 gap-16">
            {[
              {
                step: 1,
                title: "初期設定",
                description: "InsightSyncを既存のコミュニケーションツールと連携し、組織構成を設定します。",
                icon: <Layers className="h-6 w-6" />,
                align: "left"
              },
              {
                step: 2,
                title: "チーム導入サポート",
                description: "チームが日々の業務でInsightSyncを活用できるよう、導入支援を行います。",
                icon: <Users className="h-6 w-6" />,
                align: "right"
              },
              {
                step: 3,
                title: "連携・カスタマイズ",
                description: "ダッシュボードやレポート、アラートを組織のニーズに合わせて設定します。",
                icon: <Zap className="h-6 w-6" />,
                align: "left"
              },
              {
                step: 4,
                title: "本稼働・サポート開始",
                description: "本格運用を開始し、カスタマーサクセスチームが継続的にサポートします。",
                icon: <Globe className="h-6 w-6" />,
                align: "right"
              }
            ].map((step, index) => (
              <div key={index} className={`flex items-center ${step.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: step.align === 'left' ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="flex-1"
                >
                  <div className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 ${step.align === 'right' ? 'md:mr-16' : 'md:ml-16'}`}>
                    <h3 className="text-xl font-bold mb-3 text-primary-950">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
                
                <div className="hidden md:flex relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold z-10"
                  >
                    {step.step}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Security & Compliance */}
      <Section
        title="エンタープライズレベルのセキュリティ"
        subtitle="大切な情報を守るため、最高水準のセキュリティとコンプライアンスを徹底しています。"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary-950">データの安全を守ります</h3>
            <p className="text-gray-600 mb-6">
              InsightSyncは、エンタープライズレベルのセキュリティ対策を実施し、組織の大切なデータを世界基準で保護します。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {[
                { icon: <Shield className="h-5 w-5" />, title: "SOC 2認証" },
                { icon: <Shield className="h-5 w-5" />, title: "GDPR準拠" },
                { icon: <Shield className="h-5 w-5" />, title: "エンドツーエンド暗号化" },
                { icon: <Shield className="h-5 w-5" />, title: "ロールベースアクセス" },
                { icon: <Shield className="h-5 w-5" />, title: "データ保持管理" },
                { icon: <Shield className="h-5 w-5" />, title: "定期的なセキュリティ監査" }
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-primary-50 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Data security" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        title=""
        className="gradient-bg text-white py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            組織の意思決定を進化させませんか？
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            今すぐ10日間の無料トライアルを始めましょう（クレジットカード不要）
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-primary bg-white text-primary-950 hover:bg-gray-100">
              無料トライアルを始める
            </Link>
            <Link to="/contact" className="btn btn-secondary border-white hover:bg-white/10">
              デモを申し込む
            </Link>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Services;