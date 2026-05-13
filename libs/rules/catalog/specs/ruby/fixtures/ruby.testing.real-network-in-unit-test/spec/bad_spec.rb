RSpec.describe 'x' do
  it 'calls' do
    Net::HTTP.get(URI('http://example.com'))
  end
end
