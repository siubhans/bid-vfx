require "test_helper"

class StudiosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @studio = studios(:one)
  end

  test "should get index" do
    get studios_url, as: :json
    assert_response :success
  end

  test "should create studio" do
    assert_difference("Studio.count") do
      post studios_url, params: { studio: { logo: @studio.logo, name: @studio.name, user_id: @studio.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show studio" do
    get studio_url(@studio), as: :json
    assert_response :success
  end

  test "should update studio" do
    patch studio_url(@studio), params: { studio: { logo: @studio.logo, name: @studio.name, user_id: @studio.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy studio" do
    assert_difference("Studio.count", -1) do
      delete studio_url(@studio), as: :json
    end

    assert_response :no_content
  end
end
